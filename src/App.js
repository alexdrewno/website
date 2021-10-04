import "./App.css";
import "./shared/styles/Text.css";
import { Header, ProjectCard } from "./components";
import { projects } from "./data/Projects";

function App() {
  const renderProjects = () => {
    var projectCards = [];

    for (let i = 0; i < projects.length; i++) {
      projectCards.push(<ProjectCard project={projects[i]} />);
    }

    return projectCards;
  };

  const renderProjectTitles = () => {
    var projectTitles = [];

    for (let i = 0; i < projects.length; i++) {
      projectTitles.push(
        <p className="Normal-text List-item">{projects[i].title}</p>
      );
    }

    return projectTitles;
  };

  return (
    <div className="App">
      <div className="App-container">
        <Header />

        <div className="App-row-container">
          <div className="App-sidemenu">
            <p className="Section-text">PROJECTS</p>
            {renderProjectTitles()}
          </div>
          <div className="App-content-container">
            {renderProjects()}
            {/* <h1>credit design</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
