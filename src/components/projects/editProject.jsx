import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import httpservice from "../../services/httpservice";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import SearchBar from "../../common/searchbar";
import ProjectTable from "./projectTable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { ToastContainer, toast } from "react-toastify";

const EditProject = () => {
  function getcurrentUser() {
    try {
      const jwt = localStorage.getItem("token");
      const currentuser = jwtDecode(jwt);
      //console.log(currentuser);
      //setUser({ username: currentuser.name, admin: currentuser.admin });
      return currentuser;
    } catch (error) {}
  }

  const currentuser = getcurrentUser();

  //Getters and Setters
  //Initialize Projects
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState([]);
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);

  //initialize Search Field Input
  const [input, setInput] = useState({
    projectno: "",
    projectname: "",
    departmentname: "",
    projectmanager: "",
    status: "",
    startdate: "",
    enddate: "",
  });

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(4);
  const [currentPage, setcurrentPage] = useState(1);

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

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);

      const res = await axios.get("/selfappraisal" + "/" + projects._id);
      setProject(res.data);
      setLoading(false);
    };
    fetchProject().catch((ex) => {});
  }, [project]);

  //Load Employees Data from the Server

  useEffect(() => {
    httpservice
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Users Data");
        }
      });
  }, [users]);

  //Load Department Data from the Server
  //Load Data from the Server
  useEffect(() => {
    httpservice
      .get("/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Departments Data");
        }
      });
  }, [departments]);

  //SearchBar Handler
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    setpageSize(4);
  }

  ///getPaged Data Function

  function getPagedData() {
    const allProjects = projects;

    let filtered = allProjects;
    if (input)
      filtered = allProjects.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.projectname.toLowerCase(),
            input.projectno.toLowerCase(),
            input.departmentname.toLocaleLowerCase(),
            input.status.toLowerCase(),
            input.projectmanager.toLowerCase(),
            input.startdate.toLowerCase(),
            input.enddate.toLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedProjects = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      pProjects: paginatedProjects,
    };
  }
  const { totalCount, pProjects } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  // console.log(project);
  return (
    <div>
      <ToastContainer />
      <Row>
        <Row className="m-5">
          <NavBarMain currentuser={currentuser} />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={currentuser} />
          </Col>
          <Col md="9">
            <Row className="m-3">
              <SearchBar
                handleChange={handleChange}
                title="Search for Project to Edit"
                name="projectname"
                value={input.projectname}
              />
            </Row>
            <Form>
              <Row className="m-3">
                <div className="sectiondescription">
                  <h6 className="leading">Edit a Project on the System</h6>A
                  <strong> Project Program </strong> is an undertaking by any of
                  the County Departments, carried out individually or
                  collaboratively to achieve a particular objective inline with
                  the County Development Goals.{" "}
                </div>
              </Row>
              <Row className="m-5 adddataform">
                <Row className="m-3">
                  <Form.Group as={Col} md="4">
                    <InputGroup>
                      <InputGroup.Text>Fisical Year</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder={project.fisicalyear}
                        name="fisicalyear"
                        value={project.fisicalyear}
                        onChange={handleChange}
                      >
                        <option value="2021" key="1">
                          2021
                        </option>
                        <option value="2022" key="2">
                          2022
                        </option>
                        <option value="2023" key="3">
                          2023
                        </option>
                        <option value="2024" key="4">
                          2024
                        </option>
                        <option value="2025" key="5">
                          2025
                        </option>
                        <option value="2026" key="6">
                          2026
                        </option>
                        <option value="2027" key="7">
                          2027
                        </option>
                        <option value="2028" key="8">
                          2028
                        </option>
                        <option value="2029" key="9">
                          2029
                        </option>
                        <option value="2030" key="10">
                          2030
                        </option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <InputGroup>
                      <InputGroup.Text>Project Review Date</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Review "
                        name="review"
                        value={project.review}
                        onChange={handleChange}
                      >
                        <option key="1">1st Quarter</option>
                        <option key="2">2nd Quarter</option>
                        <option key="3">3rd Quarter</option>
                        <option key="4">Annually</option>
                      </Form.Select>
                    </InputGroup>
                    /
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <InputGroup>
                      <InputGroup.Text>Status</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Status "
                        name="status"
                        value={project.status}
                        onChange={handleChange}
                      >
                        <option value="OnGoing" key="1">
                          Ongoing
                        </option>
                        <option value="OnGoing" key="2">
                          Pending
                        </option>
                        <option value="Stalled" key="3">
                          Stalled
                        </option>
                        <option value="Completed" key="4">
                          Completed
                        </option>
                      </Form.Select>
                    </InputGroup>
                    /
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>
                        Start Date--
                        <FormControl
                          id="inlineFormInputGroupStartDate"
                          type="date"
                          name="startdate"
                          value={project.startdate}
                          onChange={handleChange}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>
                        Completion Date--
                        <FormControl
                          id="inlineFormInputGroupEndDate"
                          type="date"
                          name="enddate"
                          value={project.enddate}
                          onChange={handleChange}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Project Manager</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Role"
                        name="user"
                        value={project.user}
                        onChange={handleChange}
                      >
                        {users.map((e) => (
                          <option value={e._id} key={e._id}>
                            {e.firstname} {""} {e.surname}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Project No</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroupProjectNo"
                        type="text"
                        placeholder="Project Name"
                        name="projectno"
                        value={project.projectno}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <InputGroup.Text>Project Name</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroupProjectName"
                        type="text"
                        placeholder="Project Name"
                        name="projectname"
                        value={project.projectname}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <InputGroup.Text>Department Name</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Duty Station/ Department"
                        name="department"
                        value={project.department}
                        onChange={handleChange}
                      >
                        {departments.map((d) => (
                          <option value={d._id} key={d._id}>
                            {d.departmentname}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Donor</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Role"
                        name="donor"
                        value={project.donor}
                        onChange={handleChange}
                      >
                        <option value="County Government">
                          County Gorvernment
                        </option>
                        <option value="National Government">
                          National Gorvernment
                        </option>
                        <option value="CGI and National government">
                          CGI and National government
                        </option>
                        <option value="CGI and National Government and Partners">
                          CGI and National Government and Partners
                        </option>
                        <option value="CGI and National Govt, World Food Programme and Development partners">
                          CGI and National Govt, World Food Programme and
                          Development partners
                        </option>
                        <option value="CGI WFP Action Aid and development partners">
                          CGI WFP Action Aid and development partners
                        </option>
                        <option value="GoK,CGI CARITAS, Kenya  RAPID,World Food Programme Anglican Development Service(ADS), Mercy CORPS">
                          GoK,CGI CARITAS, Kenya RAPID,World Food Programme
                          Anglican Development Service(ADS), Mercy CORPS
                        </option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Budget</InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroupBudget"
                        type="number"
                        placeholder="Kes 100,000.00"
                        name="budget"
                        value={project.budget}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <InputGroup.Text>Project Description</InputGroup.Text>
                      <FormControl
                        as="textarea"
                        id="inlineFormInputGroupProjectDescription"
                        type="text"
                        placeholder="Special Notes Here"
                        name="projectdescription"
                        value={project.projectdescription}
                        onChange={handleChange}
                        rows={2}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <hr></hr>
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>Special Notes</InputGroup.Text>

                      <FormControl
                        as="textarea"
                        id="inlineFormInputGroupSpecialNotes"
                        type="text"
                        placeholder="Special Notes Here"
                        name="specialnotes"
                        value={project.specialnotes}
                        onChange={handleChange}
                        rows={3}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Row>
            </Form>
            <Row className="m-3"></Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditProject;
