import React from "react";

const Comic = ({ comic }) => {
  return (
    <div className="item">
      <div className="cadre">
        <div>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
        </div>
      </div>
      <div>
        <h2>{comic.title}</h2>
        {/* <p>{comic.description}</p> */}
      </div>
    </div>
  );
};

export default Comic;
