import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";
import styles from "./SearchPanel.module.css";
import axios from "axios";

class SearchPanel extends Component {
  state = {
    search: "",
    searching: false,
    results: {
      existing: [],
      sugestion: []
    }
  };

  parseMovie = item => {
    return {
      title: item.title,
      year: item.year,
      director: item.directors ? item.directors.join(", ") : undefined,
      country: item.country,
      poster:
        item.poster === "N/A"
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-cjdNjHYhNDecueLnscXjITrfd5oda6rfEpWfQY6C9UseP8pu"
          : item.poster
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searching) {
      axios
        .get(`http://localhost:3001/v1.0.0/search?title=${this.state.search}`)
        .then(({ data }) => {
          const existing = data.local;
          const sugestion = data.external;
          // data = data.filter((_value, index) => index < 3);
          this.setState({
            ...this.state,
            searching: false,
            results: {
              ...this.state.results,
              existing: existing.map(this.parseMovie),
              sugestion: sugestion.map(this.parseMovie)
            }
          });
        })
        .catch(error => {
          this.setState({
            ...this.state,
            searching: false,
            results: {
              existing: [],
              sugestion: []
            }
          });
        });
    }
  }

  onKeyPressHandler = event => {
    this.setState({
      search: event.target.value,
      searching: false,
      results: {
        ...this.state.results
      }
    });
  };

  onSearchHandler = event => {
    if (event.charCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      // go search
      this.setState({
        ...this.state,
        searching: true,
        results: {
          ...this.state.results
        }
      });
    }
  };

  onAddHandler = (title, year) => {
    axios
      .post(`http://localhost:3001/v1.0.0/add`, {
        title,
        year
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({
            ...this.state,
            searching: true,
            results: {
              ...this.state.results
            }
          });
        }, 1000);
      });
  };

  render() {
    return (
      <div className={styles.block}>
        <SearchBar
          search={this.state.search}
          inputHandler={this.onKeyPressHandler}
          searchHandler={this.onSearchHandler}
        ></SearchBar>
        <Results
          existing={this.state.results.existing}
          sugestion={this.state.results.sugestion}
          addHandler={this.onAddHandler}
        ></Results>
      </div>
    );
  }
}

export default SearchPanel;
