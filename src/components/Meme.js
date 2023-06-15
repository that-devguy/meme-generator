import React from "react";
import MemeData from "../data";

function Meme() {
    let url

  function handleClick() {
    const memesArray = MemeData.data.memes
    const memes = memesArray.map((meme) => meme.url);
    const memeImage = memes[
        Math.floor(Math.random() * memes.length)
    ]
    url = memeImage
    console.log({memeImage});
  }
    

  return (
    <div className="meme--formContainer">
      <input 
        type="text" 
        className="meme--input" 
        placeholder="Shut up"
      />
      <input
        type="text"
        className="meme--input"
        placeholder="and take my money"
      />
      <button 
        type="submit" 
        className="meme--button" 
        onClick={handleClick}
        >
        Get a new meme image 🖼
      </button>
    </div>
  );
}

export default Meme;
