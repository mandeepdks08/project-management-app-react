import { useState, useRef } from 'react';

export default function Tasks({ project, handleAddTask }) {
    const [, renderAgain] = useState(0);
    const inputRef = useRef();

    function handleAddTask() {
        const task = inputRef.current.value;
        inputRef.current.value = '';
        if (task.trim() !== "") {
            project.tasks.push(task);
            renderAgain(curr => (curr + 1) % 2);
        }
    }

    function removeTask(taskIndex) {
        project.tasks.splice(taskIndex, 1);
        renderAgain(curr => (curr+1)%2);
    }

    return (
        <div className="mt-5 rounded-md">
            <h2 className="text-2xl text-stone-700 font-bold">Tasks</h2>
            <div className="flex mt-3">
                <input type="text" ref={inputRef} className="w-3/8 bg-stone-200 p-1 text-lg border-b-2 border-stone-400 focus:border-stone-800 focus:outline-none rounded-sm" />
                <button onClick={handleAddTask} className="p-1 pl-3 textl-g">Add Task</button>
            </div>
            {project.tasks.length > 0 && <ul className="mt-3 bg-stone-100 px-5 py-5">
                {project.tasks.map((task, index) => {
                    return (<li key={index} className="flex justify-between pt-1 pb-1">
                        <p className="text-lg">{task}</p>
                        <button onClick={() => removeTask(index)} className="text-lg">Clear</button>
                    </li>);
                })}
            </ul>}
        </div>
    );
}