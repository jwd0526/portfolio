import React, { useEffect, useState } from "react";
import Section from "../Section";
import Modal from "./Modal/Modal";
import ProjectContent from "./ProjectContent/ProjectContent";
import "./Projects.css";

const generateStars = (container: HTMLElement, numStars: number) => {
  const containerRect = container.getBoundingClientRect();
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const starSize = Math.random() * (3 - 1) + 1;
    const starX = Math.random() * (containerRect.width - starSize);
    const starY = Math.random() * (containerRect.height - starSize);
    star.style.left = `${starX}px`;
    star.style.top = `${starY}px`;
    star.style.opacity = (Math.random() * (0.5 - 0.1) + 0.1).toString();
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(star);
  }
};

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(-1);

  useEffect(() => {
    const starContainer = document.querySelector(
      ".projects-star-container"
    ) as HTMLElement;
    const numStars = 10;

    generateStars(starContainer, numStars);
  }, []);

  const projects: React.ReactNode[] = [
    <ProjectContent
      className="project1"
      name="TextMailer"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={
        <p>
          TextMailer is an open source Java package that allows you to send text
          messages via email to various mobile carriers. It provides a
          convenient way to compose and schedule text messages to be delivered
          at a specified time.<br></br>
          <br></br>The goal of this project was to create a free and dynamic way
          for programmers to implement a messaging service in their
          applications. I used it in a side project, &nbsp;
          <a href="https://github.com/jwd0526/PuppyPledge">PuppyPledge</a>, to
          send daily puppy pictures and inspirational quotes to my friends and
          family.
          <br></br>
          <br></br>For more documentation, as well as source code, check it out
          my Github.
        </p>
      }></ProjectContent>,
    <ProjectContent
      className="project2"
      name="Project 2"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={<p></p>}></ProjectContent>,
    <ProjectContent
      className="project3"
      name="Project 3"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={<p>Description goes here</p>}></ProjectContent>,
    <ProjectContent
      className="project4"
      name="Project 4"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={<p>Description goes here</p>}></ProjectContent>,
    <ProjectContent
      className="project5"
      name="Project 5"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={<p>Description goes here</p>}></ProjectContent>,
    <ProjectContent
      className="project6"
      name="Project 6"
      embedID="21TvZ0DpvtU"
      gitHubLink="https://github.com/jwd0526/TextMailer"
      descriptionContent={<p>Description goes here</p>}></ProjectContent>,
  ];

  const handleGridElementClick = (content: React.ReactNode, index: number) => {
    setModalContent(content);
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  return (
    <Section
      title="My Projects"
      gradientStart="#1E293B"
      gradientEnd="#2B4050"
      idName="projects">
      <div className="projects-star-container"></div>
      <div className="grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid-element p${index + 1} hidden`}
            onClick={() => handleGridElementClick(project, index)}>
            {`Project ${index + 1}`}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrevious={() => {
          const newIndex =
            currentProjectIndex === 0
              ? projects.length - 1
              : currentProjectIndex - 1;
          setModalContent(projects[newIndex]);
          setCurrentProjectIndex(newIndex);
        }}
        onNext={() => {
          const newIndex =
            currentProjectIndex === projects.length - 1
              ? 0
              : currentProjectIndex + 1;
          setModalContent(projects[newIndex]);
          setCurrentProjectIndex(newIndex);
        }}>
        {modalContent}
      </Modal>
    </Section>
  );
};

export default Projects;
