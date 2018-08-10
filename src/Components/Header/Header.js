import React from "react";
import NavBar from "./NavBar";
import ClockApp from "./Clock_App";

const Header = () => {
  return (
    <header className="Header">
      {/* <h1 className="App-title">Quality Assurance Tracking System</h1> */}
      <NavBar />
      <ClockApp />
    </header>
  );
};

export default Header;
