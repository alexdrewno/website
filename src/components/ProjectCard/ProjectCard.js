import "./ProjectCard.css";
import "../../shared/styles/Text.css";

const baseImagePath = "../../assets/Photos/";

export default function ProjectCard({ project }) {
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
        <p className="Normal-text">{project.description}</p>
      </div>
    </div>
  );
}
