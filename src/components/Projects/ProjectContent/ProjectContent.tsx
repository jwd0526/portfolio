import { ReactNode } from "react";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./ProjectContent.css";

interface ProjectContentProps {
  className: string;
  name: string;
  embedID: string;
  gitHubLink: string;
  descriptionContent: ReactNode;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  className,
  name,
  embedID,
  gitHubLink,
  descriptionContent,
}) => {
  return (
    <div className="project-container">
      <div className={className}>
        <h2 className="name-text">{name}</h2>
        <YoutubeEmbed embedId={embedID} />
        <div className="horiz-divider" />
        <div className="linkBox">
          <p className="link-description">
            GitHub Link:&nbsp;&nbsp;
            <a className="github-link" href={gitHubLink}>
              {gitHubLink}
            </a>
          </p>
        </div>
      </div>
      <div className="description-box">
        <div className="vert-divider" />
        <div className="description">
          <h2>Description</h2>
          <div className="descript-content">{descriptionContent}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
