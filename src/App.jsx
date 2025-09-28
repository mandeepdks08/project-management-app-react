import ProjectsList from "./components/ProjectsList";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectView from "./components/ProjectViewComponent/ProjectView";
import AddProjectForm from "./components/AddProjectForm/AddProjectForm";
import { useState } from 'react';

const projects = [
  {
    title: 'Mastering React',
    description: 'My plan is to master react',
    dueDate: "Dec 29, 2024",
    tasks: []
  }
];

function App() {
  const [addingProject, setAddingProject] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const showNoProjectSelectedPage = !addingProject && selectedProjectIndex === null;
  const selectedProject = selectedProjectIndex !== null ? projects.at(selectedProjectIndex) : null;
  console.log(selectedProject);

  function addProjectHandler() {
    setAddingProject(true);
    setSelectedProjectIndex(null);
  }

  function showProjectHandler(projectIndex) {
    console.log(projectIndex);
    if (addingProject) handleCancelProjectAddition();
    setSelectedProjectIndex(projectIndex);
  }

  function handleCancelProjectAddition() {
    setAddingProject(false);
    setSelectedProjectIndex(null);
  }

  function afterNewProjectSave() {
    setAddingProject(false);
    setSelectedProjectIndex(null);
  }

  function handleProjectDelete() {
    projects.splice(selectedProjectIndex, 1);
    setSelectedProjectIndex(null);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-12"></header>
      <main className="flex flex-1">
        <ProjectsList projects={projects} addProjectHandler={addProjectHandler} showProjectHandler={showProjectHandler} />
        {showNoProjectSelectedPage && <NoProjectSelected addProjectHandler={addProjectHandler} />}
        {addingProject && <AddProjectForm projects={projects} onCancel={handleCancelProjectAddition} afterSave={afterNewProjectSave} />}
        {selectedProject && <ProjectView project={selectedProject} onDelete={handleProjectDelete} />}
      </main>
    </div>
  );
}

export default App;
