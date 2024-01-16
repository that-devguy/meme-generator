import React from "react";
import memesData from "../data";

function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} className="meme--image" alt="Meme" />
    </div>
  );
}

export default Meme;
