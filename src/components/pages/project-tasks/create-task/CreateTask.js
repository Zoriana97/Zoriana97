import { useState } from "react";

import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";
import SuccessButton from "../../../buttons/success-button/SuccessButton";
import InputText from "../../../inputs/input-text/InputText";
import InputDate from "../../../inputs/input-date/InputDate";
import Modal from "../../../modal/Modal";
import tasks from "../../../../data/tasks";

import './CreateTask.css';

const CreateTask = ({ project, onChange }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState(null);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const changeTaskDescription = (event) => {
        setTaskDescription(event.target.value);
    };

    const changeTaskDeadline = (date) => {
        setTaskDeadline(date);
    };

    const createTask = () => {
        const date = new Date();
        tasks.addTask({
            id: date.getTime(),
            projectId: project.id,
            description: taskDescription,
            deadline: taskDeadline,
            createDate: date,
            status: 'New'
        });
        onChange(tasks.getProjectTasks(project.id));
        setTaskDescription('');
        setTaskDeadline(null)
        closeModal();
    };

    return (
        <div className="create-task">
            <PrimaryButton onClick={openModal}>
                Create Task
            </PrimaryButton>
            <Modal title="Create Task" isVisible={isModalVisible} close={closeModal}>
                <div className="create-task-modal">
                    <InputText label="Description" placeholder="Enter Task Description" value={taskDescription} onChange={changeTaskDescription} textarea />
                    <InputDate label="Deadline" value={taskDeadline} onChange={changeTaskDeadline} />
                    <div className="create-task-buttons">
                        <SuccessButton onClick={createTask} disabled={!taskDescription || !taskDeadline}>
                            Create Task
                        </SuccessButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CreateTask;

