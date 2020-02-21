import React from "react";

import "./home.css";
import Header from "../header";
import StoreMenu from "../StoreMenu";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StoreMenu />
      </React.Fragment>
    );
  }
}

export default Home;
