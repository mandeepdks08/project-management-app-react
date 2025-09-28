import { useRef, forwardRef, useImperativeHandle } from 'react';

const DueDateInput = forwardRef(function DueDateInput(props, ref) {
    const dueDateRef = useRef();
    useImperativeHandle(ref, () => ({
        value: () => dueDateRef.current.value,
        reset: () => { dueDateRef.current.value = "" }
    }));
    return (
        <section className="flex flex-col mt-5">
            <label className="font-bold text-stone-500 py-2">DUE DATE</label>
            <input ref={dueDateRef} type="date" className="bg-stone-200 p-1 border-0 border-b-2 border-stone-400 rounded-sm focus:outline-none focus:border-stone-800" />
        </section>
    );
});

export default DueDateInput;