import storage from "./storage";

const tasks = {
    getTasks: () => {
        const tasksList = storage.getObject('tasks');
        return tasksList ? tasksList : [];
    },

    getProjectTasks: (id) => {
        const taskList = tasks.getTasks();
        return taskList.filter((task) => String(task.projectId) === String(id));
    },

    addTask: (task) => {
        const newTasks = tasks.getTasks();
        newTasks.push(task);
        storage.saveObject('tasks', newTasks);
    },

    updateTaskStatus: (id, newStatus) => {
        const tasksList = tasks.getTasks();
        const task = tasksList.find((task) => String(task.id) === String(id));
        task.status = newStatus;
        storage.saveObject('tasks', tasksList);
    },

    removeTask: (id) => {
        let newTasks = tasks.getTasks();
        newTasks = newTasks.filter((task) => String(id) !== String(task.id));
        storage.saveObject('tasks', newTasks);
    }
}

export default tasks;