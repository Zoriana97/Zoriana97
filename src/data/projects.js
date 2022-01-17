import storage from "./storage";

const projects = {
    getProjects: () => {
        const projects = storage.getObject('projects');
        return projects ? projects : [];
    },

    getProject: (id) => {
        return projects.getProjects().find((project) => String(project.id) === String(id));
    },

    addProject: (project) => {
        const newProjects = projects.getProjects();
        newProjects.push(project);
        storage.saveObject('projects', newProjects);
    },

    removeProject: (id) => {
        let newProjects = projects.getProjects();
        newProjects = newProjects.filter((project) => String(id) !== String(project.id));
        storage.saveObject('projects', newProjects);
    }
}

export default projects;
