export default function Header({title, dueDate, onDelete}) {
    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between">
                <h2 className="text-3xl text-stone-700 font-bold">{title}</h2>
                <button onClick={onDelete} className="text-lg">Delete</button>
            </div>
            <div className="mt-2">
                <p className="text-lg text-stone-400">{dueDate}</p>
            </div>
        </div>
    );
};