import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import httpservice from "../../services/httpservice";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import DepartmentTable from "./departmentTable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";

const Department = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

  const [departments, setDepartments] = useState([
    {
      departmentno: "",
      departmentname: "",
    },
  ]);
  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const pageSize = 50;
  const [currentPage, setcurrentPage] = useState(1);
  const [input, setInput] = useState({
    departmentno: "",
    departmentname: "",
    departmentdescription: "",
  });

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

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newDepartment = {
        departmentno: input.departmentno,
        departmentname: input.departmentname,
        departmentdescription: input.departmentdescription,
      };
      axios.post("http://localhost:3001/createdepartment", newDepartment);
      setValidated(true);
      setEntryadded("1 Department added to the Database");
      setInput({
        departmentno: "",
        departmentname: "",
        departmentdescription: "",
      });
    }
    setValidated(false);
  };

  //Load Data from the Server
  useEffect(() => {
    httpservice
      .get("/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Department Data");
        }
      });
  }, [departments]);
  //handle filtered Data
  function getPagedData() {
    const allDepartments = departments;

    let filtered = allDepartments;
    if (input)
      filtered = allDepartments.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.departmentno.toLowerCase(),
            input.departmentname.toLowerCase(),
            input.departmentdescription.toLocaleLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedDepartments = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aDepartments: paginatedDepartments,
    };
  }
  const { totalCount, aDepartments } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-5">
                <h2>Sub-Sector Listings</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add a <strong> Sub Sector</strong> to the System
                  </h6>
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Sub-Sector No</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupdepartmentno"
                      type="text"
                      placeholder="Sub-Sector No"
                      name="departmentno"
                      value={input.departmentno}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Sub-Sector Name</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupDepartmentname"
                      type="text"
                      placeholder="Sub-Sector Name"
                      name="departmentname"
                      value={input.departmentname}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <hr></hr>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>Sub-Secor Description</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupdepartmentdescription"
                      type="text"
                      placeholder="Sub-Sector Description Here"
                      name="departmentdescription"
                      as="textarea"
                      rows={3}
                      value={input.departmentdescription}
                      onChange={handleChange}
                    />
                    <Button type="submit" variant="success">
                      Add Sub-Secor
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
                <h5>{entryadded ? entryadded : null}</h5>
              </Row>
              <Row className="m-3">
                <h4>
                  {totalCount === 0
                    ? "No Departments in the Database"
                    : `Showing ${totalCount} Sub-Sectors in the database.`}
                </h4>
                <DepartmentTable
                  departments={aDepartments}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={departments.length}
                  input={input}
                  name="Sub Sectors"
                />
              </Row>
              <Row className="m-3">
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Department;
