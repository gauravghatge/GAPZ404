import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-center">
      <div>
        <Link className="text-light" to="/">
          Home
        </Link>{" "}
        ||{" "}
        <Link className="text-light" to="/profile">
          Profile
        </Link>{" "}
      </div>
      <p className="text-light">© GAPZ  </p>
    </div>
  );
};

export default Footer;
