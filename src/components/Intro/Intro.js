import "./intro.css";
import Me from "../../assets/Photos/me.png";

export default function Intro() {
  return (
    <div className="Container">
      <img src={Me} className="Profile-image" />
      <p className="Title-text">Alexander Drewno</p>
      <p className="Description-text">
        Hi I’m Alex 👋 , a Software Engineer who loves tea and the outdoors ☕
        🌳
      </p>

      <div
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <a
          href="/projects"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#577590" }}
        >
          Projects
        </a>
        <a
          href="https://github.com/kirbec"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#277da1" }}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-drewno-7ba825170/"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f3722c" }}
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1pH_l7XCabM0Avzg98wcO_P6i60-H-uZ6/view?usp=sharing"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f8961e" }}
        >
          Resume
        </a>
        <a
          href="mailto: adrewno14@gmail.com"
          className="Highlighted-text-small"
          style={{ backgroundColor: "#f8961e" }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
