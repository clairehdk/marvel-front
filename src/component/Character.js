import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Character = ({ character, userToken }) => {
  const [isLoading, setLoader] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const addFav = async (event) => {
    try {
      event.preventDefault();
      const data = {
        marvelId: character._id,
        title: character.name,
        thumbnail: {
          path: character.thumbnail.path,
          extension: character.thumbnail.extension,
        },
      };
      const response = await axios.post(`http://localhost:3001/fav/add`, data, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      console.log(response.data);
      setLoader(false);
      setIsFav(true);
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
