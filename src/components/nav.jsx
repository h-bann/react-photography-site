import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  render() {
    return (
      <div className="menu">
        <Link text={"Home"} href="./index.html" />
        <Link text={"Photographs"} href="./photographs.html" />
        <Link text={"Contact"} href="./contact.html" />
        <Link />
      </div>
    );
  }
}

export default Nav;
