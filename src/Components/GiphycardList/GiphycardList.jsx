import React from "react";
import Giphycard from "../Giphycard/Giphycard";

function GiphycardList({ giphycards }) {
  return (
    <div className="grid-cards">
      {giphycards.map((giphycard) => (
        <Giphycard giphycard={giphycard} key={giphycard.id} />
      ))}
    </div>
  );
}

export default GiphycardList;
