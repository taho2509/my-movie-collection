import React, { Component } from "react";
import style from "./History.module.css";

class History extends Component {
  state = {
    search: "",
    results: {
      existing: [],
      sugestion: []
    }
  };
  render() {
    return (
      <div className={style.block}>
        <p>History</p>
      </div>
    );
  }
}

export default History;
