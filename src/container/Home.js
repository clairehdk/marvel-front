import { Link } from "react-router-dom";
import heros from "../assets/img/comics.jpeg";
import comics from "../assets/img/comic_books.jpeg";

const Home = ({ token }) => {
  return (
    <div className="container">
      <div className="home_page">
        <div>
          <div>
            <Link to="/comics" params={{ setTitle: "" }}>
              <h1>En savoir plus sur les comic books</h1>
              <img src={comics} alt="Voir les comics"></img>
            </Link>
          </div>
          <div>
            <Link to="/characters">
              <h1>En savoir plus sur les personnages</h1>
              <img src={heros} alt="Voir les personnages"></img>
            </Link>
          </div>
        </div>
        <div className={token && "hidden"}>
          <span>
            Créez un compte ou connectez vous pour accéder à vos favoris et
            ainsi retrouver vos marvels préférés
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
