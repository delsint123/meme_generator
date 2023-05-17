import React from "react";
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)                                        

    function getMemeImage() {
        let memesArr = allMemeImages.data.memes;
        let randomIdx = Math.floor(Math.random() * memesArr.length);

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: memesArr[randomIdx].url
        }))
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
                    onClick={getMemeImage}
                >
                    Get a new meme image🖼️
                </button> 
            </div>

            <img className="meme--img" src={meme.randomImage}/>
        </main>
    )
}