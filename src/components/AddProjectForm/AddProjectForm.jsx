import Input from "./Input";
import Header from "./Header";
import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import {useRef} from 'react';
import DueDateInput from "./DueDateInput";

export default function AddProjectForm({projects, onCancel, afterSave}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleOnSave() {
        const projectDetails = {
            title: titleRef.current.value(),
            description: descriptionRef.current.value(),
            dueDate: dueDateRef.current.value(),
            tasks: []
        };
        titleRef.current.reset();
        descriptionRef.current.reset();
        dueDateRef.current.reset();
        projects.push(projectDetails);
        afterSave();
    }

    return (
        <div className="flex flex-col flex-1 pl-10 pt-20 pr-60">
            <Header onCancel={onCancel} onSave={handleOnSave} />
            <section>
                <TitleInput ref={titleRef}/>
                <DescriptionInput ref={descriptionRef}/>
                <DueDateInput ref={dueDateRef}/>
            </section>
        </div>
    );
};