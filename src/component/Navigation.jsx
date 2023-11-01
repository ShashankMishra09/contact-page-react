import React from "react";
import "/src/assets/css/Navigation.css";

const Navigation = () => {
  return (
    <nav id="nav">
      <div className="logo">
        <img src="/src/img/logo.png" alt="logo" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
