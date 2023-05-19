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

    function handleChange(event) {
        let {name, value} = event.target

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main className="meme">
            <div className="meme--form">
                <input 
                    className="meme--top" 
                    type="text" 
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    className="meme--bottom" 
                    type="text" 
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="meme--submit" 
                    onClick={getMemeImage}
                >
                    Get a new meme image🖼️
                </button> 
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}