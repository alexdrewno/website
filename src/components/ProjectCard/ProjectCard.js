import "./ProjectCard.css";
import "../../shared/styles/Text.css";
import Tag from "../Tag/Tag";

export default function ProjectCard({ project }) {
  const renderKeywords = () => {
    const projectKeywords = [];

    for (let i = 0; i < project.keywords.length; i++) {
      projectKeywords.push(<Tag title={project.keywords[i]} />);
    }

    return projectKeywords;
  };

  return (
    <div className="Card-container">
      {project.image !== "" && (
        <img src={project.image} className="Card-photo" alt="Kirbot" />
      )}
      <div className="Card-description-container">
        <div className="Row-container">
          {project.icon !== "" && (
            <img src={project.icon} className="Card-icon" alt="Kirbot" />
          )}
          <p className="Title-text List-item Card-title-text ">
            {project.title}
          </p>
        </div>
        <div className="Row-container">{renderKeywords()}</div>
        <p className="Normal-text">{project.description}</p>
      </div>
    </div>
  );
}
