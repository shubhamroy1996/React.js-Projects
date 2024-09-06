import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <>
      <aside className="w-2/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>

        <div>
          <Button onClick={onStartAddProject} children="+ Add Project" />
        </div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <button className="w-full px-2 py-1 text-left rounded-sm my-1  hover:bg-stone-600 hover:text-stone-100 text-stone-400 ">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
