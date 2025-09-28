import NoProjectsIcon from '../assets/no-projects.png';

export default function NoProjectSelected({ addProjectHandler }) {
    return (
        <div className="w-3/4 flex flex-col items-center pt-40 space-y-4">
            <img src={NoProjectsIcon} alt="No Projects" className="w-20" />
            <p className="text-stone-600 text-xl font-bold">No Project Selected</p>
            <p className="text-stone-400">Select a project or get started with a new one</p>
            <button onClick={addProjectHandler} className="px-4 py-2 bg-stone-600 text-white rounded hover:bg-stone-700 transition-colors">
                Create new project
            </button>
        </div>
    );
};