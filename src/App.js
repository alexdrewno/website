import "./App.css";
import "./shared/styles/Text.css";
import { Header, ProjectCard, SideMenu } from "./components";
import { projects, contributions } from "./data/Projects";

function App() {
  const renderProjects = () => {
    var projectCards = [];

    for (let i = 0; i < projects.length; i++) {
      projectCards.push(<ProjectCard project={projects[i]} />);
    }

    return projectCards;
  };

  const renderContributions = () => {
    var contributionCards = [];

    for (let i = 0; i < contributions.length; i++) {
      contributionCards.push(<ProjectCard project={contributions[i]} />);
    }

    return contributionCards;
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-row-container">
          <SideMenu projects={projects} contributions={contributions} />

          <div className="App-content-container">
            <p className="Title-text"> Recent Projects </p>
            {renderProjects()}
            <p className="Title-text"> Major Contributions </p>
            {renderContributions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
