import React from "react";
import { CardFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <CardFooter className="text-muted">
        <p>
          This site is fictional! Made only for demonstration and learning
          purposes
        </p>
        <p>© {new Date().getFullYear()} Site is Designed by Abhishek Duggal</p>
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
