import { useState } from "react";

import CreateProject from "./create-project/CreateProject";
import ProjectsTable from "./project-table/ProjectTable";
import projects from "../../../data/projects";

import './ProjectsPage.css';

const ProjectsPage = () => {
    const [projectList, setProjectList] = useState(projects.getProjects());

    return (
        <div className="container">
            <h2 className='page-title projects-header'>
                <span>
                    Projects
                </span>
                <span>
                    <CreateProject onChange={(projects) => setProjectList(projects)} />
                </span>
            </h2>
            <ProjectsTable projectList={projectList} onChange={(projects) => setProjectList(projects)} />
        </div>
    )
}

export default ProjectsPage;

