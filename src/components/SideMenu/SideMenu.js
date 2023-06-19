import "./SideMenu.css";
import "../../shared/styles/Text.css";

export default function SideMenu({ projects, contributions, id }) {
    const renderProjectTitles = () => {
        var projectTitles = [];

        for (let i = 0; i < projects.length; i++) {
            projectTitles.push(
                <div className="Normal-text List-item Normal-text-hover">
                    {projects[i].title}
                </div>
            );
        }

        return projectTitles;
    };

    const renderContributionTitles = () => {
        var contributionTitles = [];

        for (let i = 0; i < contributions.length; i++) {
            contributionTitles.push(
                <div className="Normal-text List-item Normal-text-hover">
                    {contributions[i].title}
                </div>
            );
        }

        return contributionTitles;
    };

    return (
        <div className="Sidemenu-container" id={id}>
            <div className="Sidemenu-separator" />
            <div className="Sidemenu-section">
                <p className="Section-text">Alexander Drewno</p>
                <a
                    href="https://github.com/alexdrewno"
                    className="Normal-text List-item Normal-text-hover"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/alexander-drewno-7ba825170/"
                    className="Normal-text List-item Normal-text-hover"
                >
                    LinkedIn
                </a>
                <a
                    href="https://docs.google.com/document/d/177ZXpMk0Clgmql2elP73kkl6lWJU58xO/edit?usp=sharing&ouid=117923324839645194658&rtpof=true&sd=true"
                    className="Normal-text List-item Normal-text-hover"
                >
                    Resume
                </a>
                <a href="mailto: adrewno14@gmail.com" className="Normal-text List-item">
                    Contact me
                </a>
            </div>

            <div className="Sidemenu-separator" />
            <div className="Sidemenu-section">
                <p className="Section-text">Recent Projects</p>
                {renderProjectTitles()}
            </div>

            <div className="Sidemenu-separator" />
            <div className="Sidemenu-section">
                <p className="Section-text">Major Contributions</p>
                {renderContributionTitles()}
            </div>

            <div className="Sidemenu-separator" />
        </div>
    );
}
