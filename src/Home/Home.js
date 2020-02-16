import React, { Component } from "react";
import History from "../History/History";
import SearchPanel from "../SearchPanel/SearchPanel";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <SearchPanel></SearchPanel>
        <History></History>
      </div>
    );
  }
}

export default Home;
