import "./intro.css";
import Me from "../../assets/Photos/me.png";
import { Link } from "react-router-dom";

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
                <Link
                    to="/projects"
                    className="Highlighted-text-small"
                    style={{ backgroundColor: "#577590" }}
                >
                    Projects
                </Link>
                <a
                    href="https://github.com/alexdrewno"
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
                    href="https://docs.google.com/document/d/177ZXpMk0Clgmql2elP73kkl6lWJU58xO/edit?usp=sharing&ouid=117923324839645194658&rtpof=true&sd=true"
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
