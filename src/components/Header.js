import React from "react";
import Logo from "../assets/images/troll-face.png";

function Header() {
    return(
        <div className="header--container">
            <img className="header--logo" src={Logo} alt="troll face" />
            <h1 className="header--title">Meme Generator</h1>
            <h2 className="header--desc">React Course - Project 3</h2>
        </div>
    )
}

export default Header;