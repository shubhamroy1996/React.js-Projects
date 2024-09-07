import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.floor(2 * Math.random()),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
        />

        {content}
      </main>
    </>
  );
}

export default App;
