import { useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = ({ handleSearch, title, token, setUser, setTitle }) => {
  // const usePageViews = () => {
  //   let location = useLocation();
  //   useEffect(() => {
  //     console.log("Hello");
  //   }, [location]);
  // };
  // let location = useLocation();
  // useEffect(() => {
  //   console.log("Hello");
  // }, []);
  // usePageViews();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        {
          // (location.pathname === "/comics" ||
          // location.pathname === "/characters") && (
          <div className="search">
            <div className="input-wrapper">
              <i className="fas fa-search fa-lg"></i>
              <input
                placeholder="Ex : Spider-man..."
                onChange={handleSearch}
                spellCheck={false}
              />
              <span className="input-highlight">{title.replace("\u00a0")}</span>
            </div>
          </div>
          // )
          // setTitle("")
        }

        {token ? (
          <div>
            <Link to="/user/favorites">
              <button>Mes favoris</button>
            </Link>

            <button className="blanc" onClick={() => setUser(null)}>
              Se déconnecter
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button>S'inscire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
