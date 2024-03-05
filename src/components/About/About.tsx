import Section from "../Section";
import React, { useEffect } from "react";
import "./About.css";

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

const About: React.FC = () => {
  useEffect(() => {
    const starContainer = document.querySelector(
      ".about-star-container"
    ) as HTMLElement;
    const numStars = 20;

    generateStars(starContainer, numStars);
  }, []);
  return (
    <Section
      title="About Me"
      gradientStart="#0F172A"
      gradientEnd="#1E293B"
      idName="about">
      <div className="about-star-container">
        {/* Stars will be appended here */}
      </div>
      <p className="about-text hidden">
        I am a dedicated and enthusiastic software developer with a passion for
        creating efficient and user-friendly applications. <br></br>I have
        experience in both front-end and back-end development, with proficiency
        in languages such as JavaScript, Python, and Java.
      </p>
    </Section>
  );
};

export default About;
