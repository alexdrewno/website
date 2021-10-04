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

  return (
    <div className="App">
      <div className="App-container">
        <Header />

        <div className="App-row-container">
          <div className="App-sidemenu">
            <p className="Section-text">PROJECTS</p>
            <p className="Normal-text List-item">Trippy</p>
            <p className="Normal-text List-item">Kirbot</p>
            <p className="Normal-text List-item">Quick Invoice</p>
            <p className="Normal-text List-item">Mutual Aid</p>
            <p className="Normal-text List-item">Chatty-Bot</p>
            <p className="Normal-text List-item">Login Page</p>
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
