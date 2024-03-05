import "./Resume.css";
import Section from "../Section";

const Resume: React.FC = () => {
  return (
    <Section
      title="My Resume"
      gradientStart="#2B4050"
      gradientEnd="#34678F"
      idName="resume">
      <p className="button-description hidden">
        Download my resume to learn more about my experience and skills.
      </p>
      <button className="download-button hidden">Download Resume</button>
    </Section>
  );
};

export default Resume;
