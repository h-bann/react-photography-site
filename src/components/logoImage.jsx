import React, { Component } from "react";
import pic from "../images/logoFinal.jpg";

class LogoImage extends Component {
  render() {
    return (
      <>
        <img src={pic} alt="logo" />
      </>
    );
  }
}

export default LogoImage;
