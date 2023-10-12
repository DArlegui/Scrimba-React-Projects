import React from 'react';
import memesData from '../src/memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
    fontSize: 'text-medium', // Added fontSize state
  });

  const [allMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    // Check if the change is for the font size
    if (name === 'changeSize') {
      setMeme((prevMeme) => ({
        ...prevMeme,
        fontSize: value, // Update fontSize based on the selected option
      }));
    } else {
      setMeme((prevMeme) => ({
        ...prevMeme,
        [name]: value,
      }));
    }
  }

  return (
    <main className="meme">
      <div className="form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Top Text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className="form-row2">
          <button className="form--button" onClick={getMemeImage}>
            Get a new meme image
          </button>
          <label htmlFor="changeSize">Change Font Size</label>
          <select
            id="changeSize" // Updated ID to match htmlFor
            name="changeSize"
            value={meme.fontSize} // Set the selected value to fontSize
            onChange={handleChange}>
            <option value="text-small">Small (1em)</option>
            <option value="text-medium">Medium (2em)</option>
            <option value="text-large">Large (3em)</option>
          </select>
        </div>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className={`meme--text top ${meme.fontSize}`}>{meme.topText}</h2>
        <h2 className={`meme--text bottom ${meme.fontSize}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
