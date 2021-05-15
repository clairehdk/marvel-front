import React from "react";

const Limit = ({ setLimit }) => {
  const handleLimit = (button) => {
    setLimit(button);
    // if (button === "15") {
    //   setLimit(15);
    // } else if (button === "50") {
    //   setLimit(50);
    // } else if (button === "100") {
    //   setLimit(100);
    // }
  };
  return (
    <div className="count">
      <span>Afficher par : </span>
      <button
        onClick={() => {
          handleLimit(15);
        }}
      >
        15
      </button>
      <button
        onClick={() => {
          handleLimit(50);
        }}
      >
        50
      </button>
      <button
        onClick={() => {
          handleLimit(100);
        }}
      >
        100
      </button>
    </div>
  );
};

export default Limit;
