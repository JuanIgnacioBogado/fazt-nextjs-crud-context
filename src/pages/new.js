import { useState, useEffect } from 'react';
import { useTask } from '../context/taskContext';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

const TaskFormPage = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        id: ''
    });
    const { createTask, getTask, updateTask } = useTask();
    const { push, query: { id } } = useRouter();

    const handleChange = ({ name, value }) => setTask({ ...task, [name]: value });

    const handleSubmit = e => {
        e.preventDefault();

        if (id) {
            updateTask(task);
        } else {
            createTask(task);
        }
        push('/');
    }

    useEffect(() => {
        if (id) {
            const taskFound = getTask(id);
            taskFound ? setTask(taskFound) : push('/');
        }

        return () => {
            setTask({
                title: '',
                description: '',
                id: ''
            });
        }
    }, [id])

    return (
        <Layout>
            <div className="flex justify-center items-center pt-10">
                <form 
                    onSubmit={handleSubmit}
                    className="bg-gray-700 p-8"
                >
                    <h2 className="text-2xl mb-4">{id ? 'Edit a Task' : 'Add a Task'}</h2>
    
                    <input
                        className="bg-gray-800 focus:outline-none w-full py-3 px-4 mb-5"
                        type="text"
                        name="title"
                        placeholder="Write a title"
                        onChange={({ target }) => handleChange(target)}
                        value={task.title}
                    />
    
                    <textarea
                        className="bg-gray-800 focus:outline-none w-full py-3 px-4 mb-5 resize-none"
                        name="description"
                        placeholder="Write a description"
                        rows="2"
                        onChange={({ target }) => handleChange(target)}
                        value={task.description}
                    ></textarea>
    
                    <button
                        className="bg-green-500 hover:bg-green-400 rounded px-4 py-2 w-full font-bold disabled:opacity-30 focus:outline-none"
                        disabled={!task.title.trim()}
                    >
                        {id ? 'Update' : 'Save'}
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default TaskFormPage;