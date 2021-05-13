import React from "react";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <div className="item">
      <Link to={`/comics/${character._id}`}>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <hr></hr>
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </Link>
    </div>
  );
};

export default Character;
