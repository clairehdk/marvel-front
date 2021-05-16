import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Comic = ({ comic, userToken, favorites }) => {
  const [isFav, setIsFav] = useState(false);

  let isAlreadyFavorite =
    favorites && favorites.length > 0
      ? favorites.filter((fav) => fav.marvelId === comic._id)
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
          marvelId: comic._id,
          title: comic.title,
          thumbnail: {
            path: comic.thumbnail.path,
            extension: comic.thumbnail.extension,
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
      <Link to={`/comic/${comic._id}`}>
        <div className="cadre">
          <div>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </div>
        </div>
      </Link>
      <div>
        <h2>{comic.title}</h2>
        {/* <p>{character.description}</p> */}
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

export default Comic;
