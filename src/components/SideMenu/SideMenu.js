import "./SideMenu.css";
import "../../shared/styles/Text.css";

export default function SideMenu({ projects, contributions, id }) {
  const renderProjectTitles = () => {
    var projectTitles = [];

    for (let i = 0; i < projects.length; i++) {
      projectTitles.push(
        <a
          className="Normal-text List-item Normal-text-hover"
          href={"#" + projects[i].title}
        >
          {projects[i].title}
        </a>
      );
    }

    return projectTitles;
  };

  const renderContributionTitles = () => {
    var contributionTitles = [];

    for (let i = 0; i < contributions.length; i++) {
      contributionTitles.push(
        <a
          className="Normal-text List-item Normal-text-hover"
          href={"#" + contributions[i].title}
        >
          {contributions[i].title}
        </a>
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
          href="https://github.com/kirbec"
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
          href="https://drive.google.com/file/d/1pH_l7XCabM0Avzg98wcO_P6i60-H-uZ6/view?usp=sharing"
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
      <div className="Sidemenu-section">
        <p className="Normal-text">
          Design inspired by "Eleven Made", with help from @Quinnsu
        </p>
      </div>
    </div>
  );
}
