import "./intro.css";
import Me from "../../assets/Photos/me.png";

export default function Intro() {
  return (
    <div className="Container">
      <img src={Me} className="Profile-image" />
      <p className="Title-text">Alexander Drewno</p>
      <p className="Description-text">
        Hi I’m Alex, a Software Engineer who loves tea ☕ and the outdoors 🌳
      </p>

      <div
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <a
          href="about"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#577590" }}
        >
          Projects
        </a>
        <a
          href="about"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#277da1" }}
        >
          Github
        </a>
        <a
          href="about"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f3722c" }}
        >
          LinkedIn
        </a>
        <a
          href="about"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f8961e" }}
        >
          Resume
        </a>
        <a
          href="about"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f8961e" }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
