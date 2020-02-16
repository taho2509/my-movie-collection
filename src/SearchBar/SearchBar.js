import React, { Component } from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  render() {
    return (
      <div className={styles.BarContainer}>
        <input
          className={styles.SearchBar}
          type="text"
          value={this.props.search}
          onChange={this.props.inputHandler}
          onKeyPress={this.props.searchHandler}
        />
      </div>
    );
  }
}

export default SearchBar;
