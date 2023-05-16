import React from "react";
import memesData from "../memesData"

export default function Meme() {

    const [memeImg, setMemeImg] = React.useState("");


    function getRandomMeme() {
        let memesArr = memesData.data.memes;
        let randomIdx = Math.floor(Math.random() * memesArr.length);

        setMemeImg(memesArr[randomIdx].url)
    }

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
                <button 
                    className="meme--submit" 
                    onClick={getRandomMeme}
                >
                    Get a new meme image🖼️
                </button> 
            </div>

            <img className="meme--img" src={memeImg}/>
        </main>
    )
}