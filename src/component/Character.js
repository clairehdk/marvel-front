import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Character = ({ character, userToken }) => {
  const [isFav, setFav] = useState(false);
  const [isLoading, setLoader] = useState(true);

  const handleFav = async (event) => {
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
        {/* <p>{character.description}</p> */}
        <button onClick={handleFav}>Ajouter au favoris</button>
      </div>
    </div>
  );
};

export default Character;
