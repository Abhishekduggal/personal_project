import React from "react";
import NavBar from "./NavBar";
import ClockApp from "./Clock_App";

const Header = () => {
  return (
    <header className="Header">
      <NavBar />
      <ClockApp />
    </header>
  );
};

export default Header;
