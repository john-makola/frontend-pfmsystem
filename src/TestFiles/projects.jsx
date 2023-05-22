import React, { useState, useEffect } from "react";
import TableFormat from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import SearchBox from "../../common/searchBox";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProjects(jsonRes));
  });

  return (
    <div>
      <Row className="m-3">
        <SearchBox
          type="text"
          placeholder="Search ...."
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </Row>
      <Row className="m-3">
        <h1>Projects</h1>

        <TableFormat striped bordered hover>
          <thead className="tablestlyles">
            <th className="clickable">Project No</th>
            <th>Project Name</th>
            <th>Department</th>
            <th>Project Manager</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </thead>
          <tbody>
            {projects
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.projectno
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.projectname
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.projectmanager
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.departmentname
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.status
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.startdate
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((project) => (
                <tr key={project.name}>
                  <td>{project.projectno}</td>
                  <td>{project.projectname}</td>
                  <td>{project.department}</td>
                  <td>{project.projectmanager}</td>
                  <td>{project.status}</td>
                  <td>{project.startdate}</td>
                  <td>{project.enddate}</td>
                </tr>
              ))}
          </tbody>
        </TableFormat>
      </Row>
    </div>
  );
}
