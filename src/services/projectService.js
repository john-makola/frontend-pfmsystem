import * as projectAPI from "./departmentService";

const projects = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1001/2021",
    projectname: "Project 1",
    projectdesctription: "",
    department: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Livestock",
    },
    projectmanager: "Nthiga Joseph",
    donor: "",
    budget: "",
    status: "OnGoing",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1002/2021",
    projectname: "Project 2",
    projectdesctription: "",
    department: {
      _id: "5b21ca3eeb7f6fbccd471819",
      name: "Education",
    },
    projectmanager: "Fredrick Kinyaga",
    donor: "",
    budget: "",
    status: "OnGoing",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1003/2021",
    projectname: "Project 3",
    projectdesctription: "",
    department: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Water",
    },
    projectmanager: "Bashir Jillo",
    donor: "",
    budget: "",
    status: "Pending",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1004/2021",
    projectname: "Project 4",
    projectdesctription: "",
    department: {
      _id: "5b21ca3eeb7f6fbccd471821",
      name: "Public Health",
    },
    projectmanager: "Liban Giro",
    donor: "",
    budget: "",
    status: "Completed",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1005/2021",
    projectname: "Project 5",
    projectdesctription: "",
    department: {
      _id: "5b21ca3eeb7f6fbccd471822",
      name: "Office of the Governors",
    },
    projectmanager: "Mustafa Kuntulo",
    donor: "",
    budget: "",
    status: "Ongoing",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1006/2021",
    projectname: "Project 6",
    projectdesctription: "",
    department: { _id: "5b21ca3eeb7f6fbccd471823", name: "Public Works" },
    projectmanager: "Martin Ouma",
    donor: "",
    budget: "",
    status: "Ongoing",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1007/2021",
    projectname: "Project 8",
    projectdesctription: "",
    department: { _id: "5b21ca3eeb7f6fbccd471824", name: "Medical Services" },
    projectmanager: "Karayu Jillo",
    donor: "",
    budget: "",
    status: "Ongoing",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1008/2021",
    projectname: "Project 8",
    projectdesctription: "",
    department: { _id: "5b21ca3eeb7f6fbccd471825", name: "Agriculture" },
    projectmanager: "Steve Ntirimo",
    donor: "",
    budget: "",
    status: "Finished",
    specialnotes: "",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    fisicalyear: "2021",
    startdate: "2021-01-03T19:04:28.809Z",
    enddate: "2021-12-03T19:04:28.809Z",
    projectno: "p1009/2021",
    projectname: "Project 9",
    projectdesctription: "",
    department: { _id: "5b21ca3eeb7f6fbccd471826", name: "Cooperative" },
    projectmanager: "Said Roba",
    donor: "",
    budget: "",
    status: "Finished",
    specialnotes: "",
  },
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((m) => m._id === id);
}

export function saveProject(project) {
  let projectInDb = projects.find((m) => m._id === project._id) || {};
  projectInDb.projectname = project.projectname;
  projectInDb.department = projectAPI.getDepartments.find(
    (g) => g._id === project.departmentId
  );
  projectInDb.numberInStock = project.numberInStock;
  projectInDb.dailyRentalRate = project.dailyRentalRate;

  if (!projectInDb._id) {
    projectInDb._id = Date.now().toString();
    projects.push(projectInDb);
  }

  return projectInDb;
}

export function deleteProject(id) {
  let projectInDb = projects.find((m) => m._id === id);
  projects.splice(projects.indexOf(projectInDb), 1);
  return projectInDb;
}
