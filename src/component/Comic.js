import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Comic = ({ comic, userToken, favorites }) => {
  const [isLoading, setLoader] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const addFav = async (event) => {
    try {
      if (favorites.marvelId !== comic._id) {
        event.preventDefault();
        const data = {
          marvelId: comic._id,
          title: comic.title,
          thumbnail: {
            path: comic.thumbnail.path,
            extension: comic.thumbnail.extension,
          },
        };
        const response = await axios.post(
          `http://localhost:3001/fav/add`,
          data,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response.data);
        setLoader(false);
        setIsFav(true);
        // setIsFavPresent = !!fav[data._id];
      } else {
        console.log("Fav déjà présent en BDD");
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
