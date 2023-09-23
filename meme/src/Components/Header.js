import React from "react"
import troll from "../Images/Troll Face.png"
import "../style.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}