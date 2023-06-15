import React from "react";
import memesData from "../data";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="meme--formContainer">
      <input type="text" className="meme--input" placeholder="Shut up" />
      <input
        type="text"
        className="meme--input"
        placeholder="and take my money"
      />
      <button type="submit" className="meme--button" onClick={handleClick}>
        Get a new meme image 🖼
      </button>
      <img src={memeImage} className="meme--image" alt="Meme" />
    </div>
  );
}

export default Meme;
