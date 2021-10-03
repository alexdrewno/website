import "./Header.css";
import "../../shared/styles/Text.css";

export default function Header() {
  return (
    <div className="Header-container">
      <div className="Header-small-container">
        <p className="Section-text">ALEXANDER DREWNO</p>
      </div>
      <div className="Header-small-container">
        <p className="Normal-text List-item">Github</p>
        <p className="Normal-text List-item">LinkedIn</p>
      </div>
      <div className="Header-small-container"></div>
      <div className="Header-medium-container">
        <p className="Normal-text">
          I am a Full Stack Software Engineer who graduated from University of
          Illinois at Urbana-Champaign with a B.S. in Computer Science and
          Mathematics
        </p>
      </div>
    </div>
  );
}
