import React, { Component } from "react";
import Logo from "./logo";
import Title from "./title";
import BurgerMenu from "./burgerMenu";
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Title />
        <BurgerMenu />
        <Nav />
      </header>
    );
  }
}

export default Header;
