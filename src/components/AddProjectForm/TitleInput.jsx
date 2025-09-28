import { useRef, forwardRef, useImperativeHandle } from 'react';

const TitleInput = forwardRef(function TitleInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        value: () => inputRef.current.value,
        reset: () => { inputRef.current.value = "" }
    }));
    return (
        <section className="flex flex-col mt-5">
            <label className="font-bold text-stone-500 py-2">TITLE</label>
            <input ref={inputRef} type="text" className="bg-stone-200 p-1 border-0 border-b-2 border-stone-400 rounded-sm focus:outline-none focus:border-stone-800" />
        </section>
    );
});

export default TitleInput;