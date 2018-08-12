import React from "react";
import { CardFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";
import DallasWeather from "./DallasWeather";
import logo from "../Login/duggal_logo.png";

const Footer = () => {
  return (
    <div>
      <CardFooter className="text-muted">
        <img src={logo} alt="personal_logo" height="50px" width="60px" />
        <br />
        <p>
          This site is fictional! Made only for demonstration and learning
          purposes
        </p>
        <p>© {new Date().getFullYear()} Site is Designed by Abhishek Duggal</p>
        <DallasWeather />
        <Button>
          <Link to="/privacy" action="replace">
            Privacy Statement
          </Link>
        </Button>
      </CardFooter>
    </div>
  );
};

export default Footer;
