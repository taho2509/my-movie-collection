import React, { Component } from "react";
import Card from "./Card/Card";

class Results extends Component {
  render() {
    const existing = this.props.existing.map(item => {
      return (
        <Card
          key={item.title + item.year + "existing"}
          image={item.poster}
          title={item.title}
          director={item.director}
          year={item.year}
          country={item.country}
        ></Card>
      );
    });

    const sugestion = this.props.sugestion.map(item => {
      return (
        <Card
          key={item.title + item.year + "sugestion"}
          image={item.poster}
          title={item.title}
          director={item.director}
          year={item.year}
          country={item.country}
          addHandler={this.props.addHandler}
        ></Card>
      );
    });
    return (
      <div>
        {existing}
        {sugestion}
      </div>
    );
  }
}

export default Results;
