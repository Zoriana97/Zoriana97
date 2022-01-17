
import tasks from "../../../../data/tasks";
import Table from "../../../table/Table";
import InputDropdown from "../../../inputs/input-dropdown/InputDropdown";

import './TasksTable.css';

import removeIcon from "../../../../resources/images/icons/render-close.svg";

const TasksTable = ({ project, taskList, onChange }) => {
    const changeTaskStatus = (id, newStatus) => {
        tasks.updateTaskStatus(id, newStatus);
        onChange(tasks.getProjectTasks(project.id));
    };

    const removeTask = (event, task) => {
        event.stopPropagation();
        tasks.removeTask(task.id);
        onChange(tasks.getProjectTasks(project.id));
    }

    const renderTaskDescription = (task) => {
        return task.description;
    };

    const renderTaskStatus = (task) => {
        return (
            <InputDropdown
                value={task.status}
                values={['New', 'In Progress', 'Done']}
                onChange={(status) => changeTaskStatus(task.id, status)}
            >
                <div className={`task-status ${task.status.replace(' ', '-')}`}>{task.status}</div>
            </InputDropdown>
        );
    };

    const renderTaskCreateDate = (task) => {
        const date = new Date(task.createDate);
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    };

    const renderTaskDeadline = (task) => {
        const date = new Date(task.deadline);
        return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    };


    const renderTaskRemove = (task) => {
        return (
            <div className="task-remove-wrapper">
                <img className="task-remove-icon" src={removeIcon}  onClick={(event) => removeTask(event, task)}/>
            </div>
        )
    }

    return (
        <div className="tasks-table">
            <Table
                columns={[
                    {
                        title: 'Task',
                        render: renderTaskDescription
                    },
                    {
                        title: 'Status',
                        render: renderTaskStatus
                    },
                    {
                        title: 'Created',
                        render: renderTaskCreateDate
                    },
                    {
                        title: 'Deadline',
                        render: renderTaskDeadline
                    },

                    {
                        title: '',
                        render: renderTaskRemove
                    }
                ]}
                data={taskList}
                placeholder="No tasks added yet"
            />
        </div>
    );
}

export default TasksTable;

