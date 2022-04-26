import { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';

const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export default ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const createTask = task => setTasks([...tasks, {...task, id: v4()}]);

    const getTask = id => tasks.find(task => task.id === id);

    const updateTask = task => setTasks(tasks.map(t => t.id === task.id ? task : t));

    const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                getTask,
                updateTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
};