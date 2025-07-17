import React, { useState } from 'react';
import './Component1.css';

const Component1 = () => {
  const arr = [
    "https://i.pinimg.com/736x/50/69/32/5069328ca7bea25ac324ff4a12598691.jpg", // stone
    "https://i.pinimg.com/736x/37/e3/a4/37e3a4ee00d0b4673e6eb7344ab4b4c6.jpg", // paper
    "https://i.pinimg.com/736x/b7/ca/86/b7ca861881803e55029a53e9c378d1c8.jpg"  // scissor
  ];

  const [imagesrc, setImage] = useState('');
  const [genrateimage, setGenrate] = useState('');
  const [wins, setWins] = useState('');

  const getChoiceName = (src) => {
    if (src === arr[0]) return 'stone';
    if (src === arr[1]) return 'paper';
    if (src === arr[2]) return 'scissor';
    return '';
  };

  const getResult = (user, comp) => {
    if (user === comp) return "It's a Draw!";
    if (
      (user === 'stone' && comp === 'scissor') ||
      (user === 'paper' && comp === 'stone') ||
      (user === 'scissor' && comp === 'paper')
    ) {
      return 'You Win!';
    } else {
      return 'You Lose!';
    }
  };

  const handleImageClick = (event) => {
    const userImg = event.target.src;
    const randomIndex = Math.floor(Math.random() * 3);
    const compImg = arr[randomIndex];

    const userChoice = getChoiceName(userImg);
    const compChoice = getChoiceName(compImg);
    const result = getResult(userChoice, compChoice);

    setImage(userImg);
    setGenrate(compImg);
    setWins(result);
  };

  return (
    <div className="container">
      <h2>Rock Paper Scissors</h2>
      <div className="images">
        <img
          src="https://i.pinimg.com/736x/50/69/32/5069328ca7bea25ac324ff4a12598691.jpg"
          alt="stone"
          onClick={handleImageClick}
        />
        <img
          src="https://i.pinimg.com/736x/37/e3/a4/37e3a4ee00d0b4673e6eb7344ab4b4c6.jpg"
          alt="paper"
          onClick={handleImageClick}
        />
        <img
          src="https://i.pinimg.com/736x/b7/ca/86/b7ca861881803e55029a53e9c378d1c8.jpg"
          alt="scissor"
          onClick={handleImageClick}
        />
      </div>

      {imagesrc && genrateimage && (
        <>
          <div className="result-box">
            <div className="choice">
              <h4>You</h4>
              <img src={imagesrc} alt="Your choice" />
            </div>
            <div className="choice">
              <h4>Computer</h4>
              <img src={genrateimage} alt="Computer's choice" />
            </div>
          </div>
          <div>
            <p>{wins}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Component1;
