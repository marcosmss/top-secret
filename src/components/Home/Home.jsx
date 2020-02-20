import React from "react";

import "./Home.css";
import Header from "../Header/Header";
import StoreMenu from "../StoreMenu/StoreMenu";

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
