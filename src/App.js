import "./App.css";
import "./shared/styles/Text.css";
import { Header, ProjectCard } from "./components";

function App() {
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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            {/* <h1>credit design</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
