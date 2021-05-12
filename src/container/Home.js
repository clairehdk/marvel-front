import { Link } from "react-router-dom";
import heros from "../assets/img/comics.jpeg";
import comics from "../assets/img/comic_books.jpeg";

const Home = ({ setSearchBar }) => {
  return (
    <div className="container home_page">
      <div>
        <Link to="/comics">
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
  );
};

export default Home;
