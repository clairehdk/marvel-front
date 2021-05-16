import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Character = ({ character, userToken, favorites }) => {
  const [isFav, setIsFav] = useState(false);

  let isAlreadyFavorite =
    favorites && favorites.length > 0
      ? favorites.filter((fav) => fav.marvelId === character._id)
      : [];

  useEffect(() => {
    if (isAlreadyFavorite && isAlreadyFavorite.length === 0) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }, []);

  const addFav = async (event) => {
    event.preventDefault();
    try {
      if (isAlreadyFavorite && isAlreadyFavorite.length === 0 && !isFav) {
        const data = {
          marvelId: character._id,
          title: character.name,
          thumbnail: {
            path: character.thumbnail.path,
            extension: character.thumbnail.extension,
          },
        };
        const response = await axios.post(
          `https://my-marvel-backend.herokuapp.com/fav/add`,
          data,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response.data);
        setIsFav(true);
      } else {
        console.dir("ERROR", "Already in database");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="item">
      <Link to={`/comics/${character._id}`}>
        <div className="cadre">
          <div>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        </div>
      </Link>
      <div>
        <h2>{character.name}</h2>
        {userToken && (
          <button onClick={addFav}>
            {isFav ? (
              <i className="fas fa-star"></i>
            ) : (
              <i className="far fa-star"></i>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Character;
