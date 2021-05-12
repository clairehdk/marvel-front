import React from "react";

const Comic = ({ comic }) => {
  return (
    <div className="item">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <h2>{comic.title}</h2>
      <p>{comic.description}</p>
    </div>
  );
};

export default Comic;
