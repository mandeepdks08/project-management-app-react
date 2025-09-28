export default function ProjectsList({projects, addProjectHandler, showProjectHandler}) {
    return (
        <div className="w-1/4 bg-black px-10 pt-20 rounded-tr-xl">
            <h2 className="text-stone-200 text-3xl font-bold">YOUR PROJECTS</h2>
            <button className="bg-stone-700 text-stone-200 text-md rounded-lg mt-10 px-4 py-2 hover:bg-stone-800 transition-colors" onClick={addProjectHandler}>+ Add Project</button>
            <ul className="mt-8">
                {projects.map(project => {
                    return <li>
                        <button className="w-full text-left text-neutral-400 py-2 pl-1 rounded-sm hover:bg-neutral-800" onClick={() => showProjectHandler(project.title)}>{project.title}</button>
                    </li>
                })}
            </ul>
        </div>
    );
};