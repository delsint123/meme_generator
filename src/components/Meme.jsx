import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])  
    
    function getMemeImage() {
        let randomIdx = Math.floor(Math.random() * allMemes.length);

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: allMemes[randomIdx].url
        }))
    }

    function handleChange(event) {
        let {name, value} = event.target

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name] : value
        }))
    }

    /**
    From Scrimba: useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    // async await version of function below
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((memeData) => setAllMemes(memeData.data.memes))
    }, [])

    return (
        <main>
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