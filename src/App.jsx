import "./App.css";
import { useState, useEffect } from "react";
import GiphycardList from "./Components/GiphycardList/GiphycardList";
import axios from "axios";

const getStoredValuesFromLocalStorage = () => {
  const storedItems = localStorage.getItem("giphycards");

  return storedItems ? JSON.parse(storedItems) : [];
};

function App() {
  const [giphycards, setGiphycards] = useState(getStoredValuesFromLocalStorage);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const giphyCardToSave = JSON.stringify(giphycards);

    localStorage.setItem("giphycards", giphyCardToSave);
    // console.log("giphyCardToSave");
  }, [giphycards]);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=qrIXCu886TPCnzjH0cPLGRXnNogbZFcN&q=${searchInput}&limit=10&offset=0&rating=g&lang=en`
      )
      .then((res) => {
        console.log(res.data.data);
        setGiphycards(res.data.data);
      });
  };

  return (
    <div className="container">
      <h1>Simple Giphy App</h1>
      <form action="">
        <input
          type="text"
          placeholder="Search. . ."
          onChange={handleSearchInput}
          value={searchInput}
        />
        <button onClick={handleSave}>BooM</button>
      </form>
      <h2>Trending</h2>
      <GiphycardList giphycards={giphycards} />
    </div>
  );
}

export default App;
