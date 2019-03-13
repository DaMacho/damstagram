// Presenter component takes the no logic and only UI the showing, 
// data comes from props and all about props, such as images etc...
import React, { Component } from "react";
import styles from "components/App/styles.module.scss";
import Footer from "components/Footer";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Footer />
      </div>
    );
  }
}

export default App;
