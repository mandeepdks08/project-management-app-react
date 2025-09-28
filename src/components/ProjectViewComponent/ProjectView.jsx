import Header from './Header';
import Body from './Body';
import Tasks from './Tasks';

export default function ProjectView({ project, onDelete }) {
    return (
        <div className="flex flex-col flex-1 pt-20 pl-10 pr-60">
            <Header title={project.title} dueDate={project.dueDate} onDelete={onDelete}/>
            <Body description={project.description} />
            <Tasks project={project}/>
        </div>
    );
}