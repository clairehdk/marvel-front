import React from "react";

const Limit = ({ setLimit, count }) => {
  const handleLimit = (button) => {
    if (button === "10") {
      setLimit(10);
    } else if (button === "50") {
      setLimit(50);
    } else if (button === "100") {
      setLimit(100);
    }
  };
  return (
    <div className="count">
      <span>Afficher par : </span>
      <button
        onClick={() => {
          handleLimit("10");
        }}
      >
        10
      </button>
      <button
        onClick={() => {
          handleLimit("50");
        }}
      >
        50
      </button>
      <button
        onClick={() => {
          handleLimit("100");
        }}
      >
        100
      </button>
    </div>
  );
};

export default Limit;
