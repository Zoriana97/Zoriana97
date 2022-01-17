import { useState } from "react";
import { useParams } from "react-router-dom";

import projects from "../../../data/projects";
import tasks from "../../../data/tasks";
import TasksTable from "./tasks-table/TasksTable";
import CreateTask from "./create-task/CreateTask";

import './ProjectTasksPage.css';

const ProjectTasksPage = () => {
    const { id } = useParams();
    const project = projects.getProject(id);
    const [taskList, setTaskList] = useState(tasks.getProjectTasks(id));

    return (
        <div className="container">
            <h2 className='page-title project-tasks-header'>
                <div  className="project-tasks-flex">
                    <div className="project-tasks-color" style={{ backgroundColor: project.color }} />
                    <div>{project.name}</div>
                </div>
                <div>
                    <CreateTask project={project} onChange={(tasks) => setTaskList(tasks)} />
                </div>
            </h2>
            <TasksTable project={project} taskList={taskList} onChange={(tasks) => setTaskList(tasks)} />
        </div>
    )
}

export default ProjectTasksPage;

