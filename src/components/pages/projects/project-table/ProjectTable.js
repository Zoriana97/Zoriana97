import { useNavigate } from "react-router-dom";

import Table from "../../../table/Table";

import './ProjectTable.css';

import removeIcon from "../../../../resources/images/icons/render-close.svg";
import projects from "../../../../data/projects";

const ProjectTable = ({ projectList, onChange }) => {
    const history = useNavigate();

    const removeProject = (event, project) => {
        event.stopPropagation();
        projects.removeProject(project.id);
        onChange(projects.getProjects());
    }

    const renderProjectName = (project) => {
        return (
            <div>
                <div className="project-color" style={{ backgroundColor: project.color }} />
                {project.name}
            </div>
        );
    };

    const renderProjectDate = (project) => {
        const date = new Date(project.date);
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    };

    const renderProjectRemove = (project) => {
        return (
            <div className="project-remove-wrapper">
                <img className="project-remove-icon" src={removeIcon} onClick={(event) => removeProject(event, project)}/>
            </div>
        )
    }

    const onRowClick = (project) => {
        history(`/projects/${project.id}`);
    };

    return (
        <div className="projects-table">
            <Table
                columns={[
                    {
                        title: 'Project',
                        render: renderProjectName
                    },
                    {
                        title: 'Created Date',
                        render: renderProjectDate
                    },

                    {
                        title: '',
                        render: renderProjectRemove
                    }
                ]}
                onRowClick={onRowClick}
                data={projectList}
                placeholder="No projects added yet"
            />
        </div>
    );
}

export default ProjectTable;

