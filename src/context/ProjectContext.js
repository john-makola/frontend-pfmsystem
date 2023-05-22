import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      projectno: "",
      projectname: "",
      departmentname: "",
      projectmanager: "",
      status: "",
      startdate: "",
      enddate: "",
    },
  ]);
  //Load Data from the Server
  useEffect(() => {
    fetch("/projects")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProjects(jsonRes));
  });

  const sortedProjects = projects.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addProject = (
    projectno,
    projectname,
    departmentname,
    projectmanager,
    status,
    startdate,
    enddate
  ) => {
    setProjects([
      ...projects,
      {
        projectno,
        projectname,
        departmentname,
        projectmanager,
        status,
        startdate,
        enddate,
      },
    ]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const updateProject = (id, updateProject) => {
    setProjects(
      projects.map((project) => (project.id === id ? updateProject : project))
    );
  };

  return (
    <ProjectContext.Provider
      value={{ sortedProjects, addProject, deleteProject, updateProject }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
