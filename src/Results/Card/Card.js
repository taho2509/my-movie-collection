import React, { Component } from "react";
import Property from "./Property/Property";
import styles from "./Card.module.css";

function Add(props) {
  const shouldAdd = props.addHandler;
  if (shouldAdd) {
    return (
      <div
        className={styles.add}
        onClick={() => props.addHandler(props.title, props.year)}
      >
        +
      </div>
    );
  }
  return null;
}

class Card extends Component {
  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div style={backgroundImage} className={styles.poster}></div>
          <h1>{this.props.title}</h1>
        </div>
        <div className={styles.body}>
          <Property label="Director: " value={this.props.director}></Property>
          <Property label="Year: " value={this.props.year}></Property>
          <Property label="Country: " value={this.props.country}></Property>
        </div>
        <Add
          title={this.props.title}
          year={this.props.yera}
          addHandler={this.props.addHandler}
        ></Add>
      </div>
    );
  }
}

export default Card;
