export default function Header({onCancel, onSave}) {
    return (
        <section className="flex justify-end">
            <button onClick={onCancel} className="px-4 py-2 text-lg">Cancel</button>
            <button onClick={onSave} className="bg-black text-white text-lg px-6 py-2 rounded-lg">Save</button>
        </section>
    );
}