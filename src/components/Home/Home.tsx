// Home.tsx

import React, { useEffect } from "react";
import "./Home.css";
import dan from "../../images/brady.jpg";

const generateStars = (container: HTMLElement, numStars: number) => {
  const containerRect = container.getBoundingClientRect(); // Get the dimensions of the container

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const starSize = Math.random() * (3 - 1) + 1; // Generate random size between 1 and 3 pixels
    const starX = Math.random() * (containerRect.width - starSize); // Random X position within container
    const starY = Math.random() * (containerRect.height - starSize); // Random Y position within container
    star.style.left = `${starX}px`;
    star.style.top = `${starY}px`;
    star.style.opacity = (Math.random() * (0.7 - 0.4) + 0.4).toString(); // Generate random opacity between 0.4 and 0.7
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;
    star.style.animationDelay = `${Math.random() * 10}s`; // Spread out the animation start times
    container.appendChild(star);
  }
};

const Animation: React.FC = () => {
  useEffect(() => {
    // Dynamically create stars and append them to the star container
    const starContainer = document.querySelector(
      ".star-container"
    ) as HTMLElement;
    const numStars = 30; // Adjust as needed

    generateStars(starContainer, numStars);
  }, []);

  return (
    <div className="animation-box">
      <div style={{ position: "relative" }}>
        <div className="image-box line2 hidden">
          <img style={{ width: "100%", height: "100%" }} src={dan} alt="dan" />
        </div>
        <div className="rotate-image line2 hidden">🚀</div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="container" id="home">
      <div className="star-container">{/* Stars will be appended here */}</div>
      <div className="intro-box">
        <div className="line1-container" style={{ display: "flex" }}>
          <div className="text line1 textP1 hidden">Hi,&nbsp;</div>
          <div className="text line1 textP2 hidden">my name is</div>
        </div>
        <div className="text line2 hidden">Jackson Davis</div>
        <div className="text line3 hidden">I code things.</div>
        <div className="text animate call-to-action hidden" id="call">
          🢃&emsp;&emsp;Check me out!&emsp;&emsp;🢃
        </div>
      </div>
      <div className="animation-container">
        <Animation />
      </div>
    </div>
  );
};

export default Home;
