import { useState } from "react";

import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";
import SuccessButton from "../../../buttons/success-button/SuccessButton";
import InputText from "../../../inputs/input-text/InputText";
import SelectColor from "../../../inputs/select-color/SelectColor";
import Modal from "../../../modal/Modal";
import projects from "../../../../data/projects";

import './CreateProject.css';

const PROJECT_COLORS = [
    "#f34a4a",
    "#ea7942",
    "#c6a435",
    "#85b329",
    "#2b7836",
    "#3bbbb2",
    "#3c9fd7",
    "#3b5cc7",
    "#3428a0",
    "#862cb1"
];

const CreateProject = ({ onChange }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectColor, setProjectColor] = useState('');

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const changeProjectName = (event) => {
        setProjectName(event.target.value);
    };

    const changeProjectColor = (color) => {
        setProjectColor(color);
    };

    const createProject = () => {
        const date = new Date();
        projects.addProject({
            id: date.getTime(),
            name: projectName,
            color: projectColor,
            date: date,
        });
        onChange(projects.getProjects());
        setProjectName('');
        setProjectColor('');
        closeModal();
    };

    return (
        <div className="create-project">
            <PrimaryButton onClick={openModal}>
                Create Project
            </PrimaryButton>
            <Modal title="Create Project" isVisible={isModalVisible} close={closeModal}>
                <div className="create-project-modal">
                    <InputText label="Name" placeholder="Enter Project Name" value={projectName} onChange={changeProjectName} />
                    <SelectColor label="Choose Project Color" colors={PROJECT_COLORS} value={projectColor} onChange={changeProjectColor}/>
                    <div className="create-project-buttons">
                        <SuccessButton onClick={createProject} disabled={!projectName || !projectColor}>
                            Create Project
                        </SuccessButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CreateProject;

