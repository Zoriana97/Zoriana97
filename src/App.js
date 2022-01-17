import { Routes, Route, Navigate } from "react-router-dom";

import Header from './components/header/Header';
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import TeamPage from "./components/pages/team/TeamPage";
import ReportsPage from "./components/pages/reports/ReportsPage";
import ProjectTasksPage from "./components/pages/project-tasks/ProjectTasksPage";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectTasksPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="/" element={<Navigate to='projects'/>}  />
        </Routes>
    </div>
  );
}

export default App;
