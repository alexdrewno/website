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
        <p className="Title-text List-item">{project.title}</p>
        <p className="Normal-text">{project.description}</p>
      </div>
    </div>
  );
}
