import { HashRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./shared/styles/Text.css";
import { ProjectCard, SideMenu, Intro } from "./components";
import { projects, contributions } from "./data/Projects";

function Projects() {
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
          <SideMenu
            projects={projects}
            contributions={contributions}
            id="sidebar"
          />

          <div className="App-content-container" id="content-container">
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

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Intro />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
