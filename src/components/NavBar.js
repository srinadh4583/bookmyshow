import React from "react";

const Navbar = () => {
  return (
    <div className="header-top">
      <a href="#" className="logo">
        Logo
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <div className="container-mid">
        <form
          action="https://www.google.com/search"
          method="get"
          className="search-bar"
          traget="_blank"
        >
          <input type="text" placeholder="search any thing" name="q" />
          <button type="submit">
            {" "}
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <nav className="navbar">
        <a href="#" className="nav-item" >
          Sign In
        </a>
        <a href="#" className="nav-item" >
          Sign up
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
