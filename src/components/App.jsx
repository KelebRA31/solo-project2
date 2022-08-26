import React, { useState, useEffect } from 'react';
const load = require('audio-loader');
const play = require('audio-play');

export default function App() {
  const mp3 = async () => {
    const sound = await load('Eiffel_65_-_Blue_Da_Ba_Dee_(musmore.com).mp3');
    console.log(sound);
    play(sound);
    pause(sound);
  };
  const [inputValue, setInputValue] = useState('net');
  const submitHandler = async (e) => {
    mp3();
    e.preventDefault();
    fetch('/api/phrase')
      .then((res) => res.json())
      .then((data) => setInputValue(data));
  };


  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);
  // const artist = inputValue?.response?.hits;
  console.log(inputValue);

  return (
    <div className="container">
      <div className="lines">

        <q className="text quote">
          {inputValue.quote}
        </q>
        <p className="text author">
          -
          {inputValue.by}
        </p>
      </div>

      <button onClick={submitHandler} type="submit" className="btn btn-primary buttonClick">GET A QUOTE</button>
    </div>
  );
}
