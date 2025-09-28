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
  const [selectedProject, setSelectedProject] = useState(null);

  const showNoProjectSelectedPage = !addingProject && !selectedProject;

  function addProjectHandler() {
    setAddingProject(true);
    setSelectedProject(null);
  }

  function showProjectHandler(title) {
    if (addingProject) handleCancelProjectAddition();
    const project = projects.filter(project => project.title === title).at(0);
    setSelectedProject(project);
  }

  function handleCancelProjectAddition() {
    setAddingProject(false);
    setSelectedProject(null);
  }

  function afterNewProjectSave() {
    setAddingProject(false);
    setSelectedProject(null);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-12"></header>
      <main className="flex flex-1">
        <ProjectsList projects={projects} addProjectHandler={addProjectHandler} showProjectHandler={showProjectHandler} />
        {showNoProjectSelectedPage && <NoProjectSelected addProjectHandler={addProjectHandler} />}
        {addingProject && <AddProjectForm projects={projects} onCancel={handleCancelProjectAddition} afterSave={afterNewProjectSave} />}
        {selectedProject && <ProjectView project={selectedProject} />}
      </main>
    </div>
  );
}

export default App;
