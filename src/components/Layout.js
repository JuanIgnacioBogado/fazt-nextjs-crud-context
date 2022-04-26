import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

import { useTask } from '../context/taskContext';

const Layout = ({ children }) => {
    const { tasks } = useTask();

    return (
        <div className="h-screen bg-gray-900 text-white">
            <header className="flex justify-between items-center bg-gray-800 px-28 py-5">
                <div className="flex items-center">
                    <Link href="/">
                        <a><h1 className="text-lg font-black mr-2">Task App</h1></a>
                    </Link>
                    <span className="text-gray-400 font-bold">
                        {tasks.length} Tasks
                    </span>
                </div>

                <Link href="/new">
                    <a className="flex items-center bg-green-500 hover:bg-green-400 rounded px-5 py-2 font-bold">
                        <AiOutlinePlus className="mr-2" />
                        Add Task
                    </a>
                </Link>
            </header>

            <main className="px-28">
                {children}
            </main>
        </div>
    )
};

export default Layout;