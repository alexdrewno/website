import "./ProjectCard.css";
import "../../shared/styles/Text.css";
import Tag from "../Tag/Tag";
import OpenIcon from "../../assets/Photos/Open_icon.png";

export default function ProjectCard({ project }) {
  const renderKeywords = () => {
    const projectKeywords = [];

    for (let i = 0; i < project.keywords.length; i++) {
      projectKeywords.push(<Tag title={project.keywords[i]} />);
    }

    return projectKeywords;
  };

  return (
    <div className="Card-container" id={project.title}>
      {project.image !== "" && (
        <img src={project.image} className="Card-photo" alt="Kirbot" />
      )}
      <div className="Card-description-container">
        <div className="Row-container">
          {project.icon !== "" && (
            <img src={project.icon} className="Card-icon" alt="Kirbot" />
          )}
          <a href={project.link} className="Card-title-text" target="_blank">
            {project.title}
            <img src={OpenIcon} className="Card-open-icon" alt="open" />
          </a>
        </div>
        <div className="Row-container">{renderKeywords()}</div>
        <p className="Normal-text">{project.description}</p>
      </div>
    </div>
  );
}
