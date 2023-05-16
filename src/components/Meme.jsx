import React from "react";

export default function Meme() {
    return (
        <main className="meme">
            <form className="meme--form">
                <input 
                    className="meme--top" 
                    type="text" 
                    placeholder="Top text"
                />
                <input 
                    className="meme--bottom" 
                    type="text" 
                    placeholder="Bottom text"
                />
                <input 
                    className="meme--submit" 
                    type="submit" 
                    value="Get a new meme image🖼️"
                />
            </form>
        </main>
    )
}