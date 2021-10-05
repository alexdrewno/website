import "../../shared/styles/Text.css";
import "../../shared/styles/Page.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="Page">
      <div className="Page-container">
        <div className="Page-section-div">
          <a
            href="about"
            className="Highlighted-text"
            style={{ backgroundColor: "#f94144" }}
          >
            Kirbec
          </a>
          <p className="Normal-text">Creator of things ☀️ </p>
        </div>

        <div className="Page-section-div">
          <ul className="Home-list">
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#f3722c" }}
              >
                Family Behavior Support App
              </a>
              {
                " an app developed with researchers to aid challenging behavior at home."
              }
            </li>
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#f8961e" }}
              >
                Trippy | Travel App
              </a>
              {" easily plan group trips."}
            </li>
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#f9844a" }}
              >
                Kirbot
              </a>
              {
                " a Discord Bot that logs time and has various community features."
              }
            </li>
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#f9c74f" }}
              >
                +more cs-projects
              </a>
            </li>
          </ul>
        </div>

        <div className="Page-section-div">
          <ul className="Home-list">
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#90be6d" }}
              >
                Into the Wild
              </a>
            </li>
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#43aa8b" }}
              >
                Graduation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="Highlighted-text"
                style={{ backgroundColor: "#4d908e" }}
              >
                +more music
              </a>
            </li>
          </ul>
        </div>

        <div className="Page-section-div">
          <a
            href="about"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#577590" }}
          >
            about
          </a>
          <a
            href="https://github.com/kirbec"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#277da1" }}
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-drewno-7ba825170/"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#f94144" }}
          >
            linkedin
          </a>
          <a
            href="#"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#f3722c" }}
          >
            resume
          </a>
          <a
            href="mailto: adrewno14@gmail.com"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#f8961e" }}
          >
            email
          </a>
        </div>
      </div>
    </div>
  );
}
