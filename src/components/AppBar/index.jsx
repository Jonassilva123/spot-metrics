import React from "react";
import "./styles.css";
import Logo from "../../assets/img/logo.png";

function AppBar() {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
    </header>
  );
}

export default AppBar;
