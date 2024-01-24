import React, { Component } from "react";
import burgerMenuIcon from "../images/burgerMenuIcon.svg";

class BurgerMenu extends Component {
  render() {
    return (
      <div className="burgerMenu">
        <img src={burgerMenuIcon} alt="burgerMenuIcon" />
      </div>
    );
  }
}

export default BurgerMenu;
