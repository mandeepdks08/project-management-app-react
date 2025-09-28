import { useRef, useImperativeHandle, forwardRef } from "react";

const Input = forwardRef(function Input({title, type}, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        value: () => inputRef.current.value,
        reset: () => {inputRef.current.value = "";}
    }));

    return (
        <div className="flex flex-col flex-1 pt-5">
            <label className="font-bold text-stone-500 py-2">{title}</label>
            <textarea className="bg-stone-200 p-1 border-0 border-b-2 border-stone-400 text-wrap rounded-sm focus:outline-none focus:border-stone-800" type={type} ref={inputRef} />
        </div>
    );
});

export default Input;