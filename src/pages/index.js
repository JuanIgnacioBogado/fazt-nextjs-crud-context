import { useTask } from '../context/taskContext';
import { VscTrash } from 'react-icons/vsc';
import Link from 'next/link';

import Layout from '../components/Layout';

const Home = () => {
    const { tasks, deleteTask } = useTask();

    return (
        <Layout>
            <div className="flex justify-center">
                {!tasks.length ? (
                    <h2 className="font-bold text-4xl mt-5">There are no Tasks</h2>
                ) : (
                    <div className="w-7/12">
                        {tasks.map(({ id, title, description }, idx) => (
                            <Link
                                key={id}
                                href={`/edit/${id}`}
                            >
                                <a className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 mt-5 flex items-center">
                                    <h2 className="mr-10 font-bold text-5xl">{idx + 1}</h2>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="font-bold text-2xl">{title}</h2>
                                            <button
                                                onClick={e => {
                                                    e.preventDefault();
                                                    deleteTask(id);
                                                }}
                                                className="bg-red-700 hover:bg-red-600 px-3 py-1 font-bold rounded flex items-center"
                                            >
                                                <VscTrash className="mr-2" />
                                                Delete
                                            </button>
                                        </div>
                                        <p className="text-gray-300">{description}</p>
                                        <span className="text-gray-400">{id}</span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Home;