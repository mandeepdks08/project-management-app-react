import { useRef, forwardRef, useImperativeHandle } from 'react';

const DescriptionInput = forwardRef(function DescriptionInput(props, ref) {
    const descriptionRef = useRef();
    useImperativeHandle(ref, () => ({
        value: () => descriptionRef.current.value,
        reset: () => { descriptionRef.current.value = "" }
    }));
    return (
        <section className="flex flex-col mt-5">
            <label className="font-bold text-stone-500 py-2">DESCRIPTION</label>
            <textarea ref={descriptionRef} type="text" className="bg-stone-200 p-1 border-0 border-b-2 border-stone-400 rounded-sm focus:outline-none focus:border-stone-800" />
        </section>
    );
});

export default DescriptionInput;