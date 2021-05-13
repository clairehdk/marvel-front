import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Header = ({ handleSearch, title, setTitle }) => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        {
          (location.pathname === "/comics" ||
            location.pathname === "/characters") && (
            <div className="search">
              <div className="input-wrapper">
                <i className="fas fa-search fa-lg"></i>
                <input
                  placeholder="Ex : Spider-man..."
                  onChange={handleSearch}
                  spellCheck={false}
                />
                <span className="input-highlight">
                  {title.replace("\u00a0")}
                </span>
              </div>
            </div>
          )
          // setTitle("")
        }

        <div>
          <Link to="/signup">
            <button>S'inscire</button>
          </Link>
          <Link>
            <button>Se connecter</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
