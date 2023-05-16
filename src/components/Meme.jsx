import React from "react";

export default function Meme() {
    return (
        <main className="meme">
            <div className="meme--form">
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
                <button className="meme--submit">
                    Get a new meme image🖼️
                </button> 
            </div>
        </main>
    )
}