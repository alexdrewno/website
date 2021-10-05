import "../../shared/styles/Text.css";
import "../../shared/styles/Page.css";
import "./About.css";

export default function About() {
  return (
    <div className="Page">
      <div className="Page-container">
        <div className="Page-section-div">
          <a href="/" className="Highlighted-text">
            {"<< home"}
          </a>
          <p className="Normal-text">About Me</p>
        </div>

        <ul className="About-list">
          <li>
            <div className="Page-section-div">
              {"I graduated from "}
              <a
                href="/"
                className="Highlighted-text"
                style={{ backgroundColor: "#577590" }}
              >
                University of Illinois at Urbana-Champaign
              </a>
              {" in 2021 and I am currently based in Chicago, Illinois"}
            </div>
          </li>
          <li>
            <div className="Page-section-div">
              There is always much to learn. The topics within computer science
              that I am interested in include software engineering, computer
              vision, artificial intelligence, computational sustainability,
              ethical hacking, and various other topics.
            </div>
          </li>
        </ul>

        <div className="Page-section-div">
          <p className="Normal-text">
            Otherwise, my other interests include creating music, nature, tea,
            competitive video gaming, playing sports, & interacting with
            animals.
          </p>
        </div>
        <div className="Page-section-div">
          <a
            href="/"
            className="Highlighted-text-small"
            style={{ backgroundColor: "#577590" }}
          >
            home
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
