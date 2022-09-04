import React from "react";

function Giphycard({ giphycard }) {
  return (
    <div className="card">
      <img
        className="giphy-img"
        src={giphycard.images.original.url}
        alt="img"
      />

      <span>{giphycard.title}</span>
    </div>
  );
}

export default Giphycard;
