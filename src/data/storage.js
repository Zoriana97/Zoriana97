const storage = {
    saveObject: (key, obj) => {
        localStorage.setItem(key, JSON.stringify(obj));
    },

    getObject: (key) => {
        const obj = localStorage.getItem(key);
        try {
            return JSON.parse(obj);
        } catch (err) {
            return null;
        }
    }
}

export default storage;