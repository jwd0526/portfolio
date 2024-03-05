import React, { useEffect, useState } from "react";
import Section from "../Section";
import Modal from "./Modal"; // Adjust the import path as necessary
import "./Projects.css";

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
    star.style.opacity = (Math.random() * (0.5 - 0.1) + 0.1).toString(); // Generate random opacity between 0.4 and 0.7
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;
    star.style.animationDelay = `${Math.random() * 10}s`; // Spread out the animation start times
    container.appendChild(star);
  }
};

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projects = [
    "Project 1 Content",
    "Project 2 Content",
    "Project 3 Content",
  ];

  useEffect(() => {
    const starContainer = document.querySelector(
      ".projects-star-container"
    ) as HTMLElement;
    const numStars = 10;

    generateStars(starContainer, numStars);
    setModalContent(projects[currentProjectIndex]);
  }, [projects[currentProjectIndex]]);

  const handleGridElementClick = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section
      title="My Projects"
      gradientStart="#1E293B"
      gradientEnd="#2B4050"
      idName="projects">
      <div className="projects-star-container"></div>
      <div className="grid">
        <div
          className="grid-element p1 hidden"
          onClick={() => handleGridElementClick(<p>Project 1 Content</p>)}>
          Project 1
        </div>

        <div
          className="grid-element p2 hidden"
          onClick={() => handleGridElementClick(<p>Project 2 Content</p>)}>
          Project 2
        </div>

        <div
          className="grid-element p3 hidden"
          onClick={() => handleGridElementClick(<p>Project 3 Content</p>)}>
          Project 3
        </div>

        <div
          className="grid-element p4 hidden"
          onClick={() => handleGridElementClick(<p>Project 4 Content</p>)}>
          Project 4
        </div>

        <div
          className="grid-element p5 hidden"
          onClick={() => handleGridElementClick(<p>Project 5 Content</p>)}>
          Project 5
        </div>

        <div
          className="grid-element p6 hidden"
          onClick={() => handleGridElementClick(<p>Project 6 Content</p>)}>
          Project 6
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePreviousProject}
        onNext={handleNextProject}>
        {modalContent}
      </Modal>
    </Section>
  );
};

export default Projects;
