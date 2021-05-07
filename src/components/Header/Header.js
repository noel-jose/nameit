import React from "react";
import "./Header.css";

const Header = ({ headertile, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        className={`header-image ${
          headerExpanded ? "header-image-expanded" : "header-image-contracted"
        }`}
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="headerImage"
      />
      <h1
        className={`header-text ${
          headerExpanded ? "header-text-expanded" : "header-text-contracted"
        }`}
      >
        {headertile}
      </h1>
    </div>
  );
};

export default Header;
