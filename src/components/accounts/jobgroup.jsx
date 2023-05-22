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
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import JobGroupTable from "./jobgrouptable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";

const JobGroup = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [jobgroups, setJobGroups] = useState([
    {
      jobgroupno: "",
      jobgroupname: "",
      jobgroupdescription: "",
    },
  ]);
  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(50);
  const [currentPage, setcurrentPage] = useState(1);
  const [input, setInput] = useState({
    jobgroupno: "",
    jobgroupname: "",
    jobgroupdescription: "",
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
      const newJobgroup = {
        jobgroupno: input.jobgroupno,
        jobgroupname: input.jobgroupname,
        jobgroupdescription: input.jobgroupdescription,
      };
      axios.post("http://localhost:3001/createjobgroup", newJobgroup);
      setValidated(true);
      setEntryadded("1 Jobgroup added to the Database");
      setInput({
        jobgroupno: "",
        jobgroupname: "",
        jobgroupdescription: "",
      });
    }
    setValidated(false);
    setpageSize(50);
  };

  //Load Data from the Server
  useEffect(() => {
    httpservice
      .get("/jobgroups")
      .then((response) => {
        setJobGroups(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading JobGroups Data");
        }
      });
  }, [jobgroups]);

  //handle filtered Data
  function getPagedData() {
    const allJobgroups = jobgroups;

    let filtered = allJobgroups;
    if (input)
      filtered = allJobgroups.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.jobgroupno.toLowerCase(),
            input.jobgroupname.toLowerCase(),
            input.jobgroupdescription.toLocaleLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginateJobGroups = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aJobGroups: paginateJobGroups,
    };
  }
  const { totalCount, aJobGroups } = getPagedData();

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
                <h2>Jobgroup Details</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add a <strong> Jobgroup</strong> to the System
                  </h6>
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Jobgroup No</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupjobgroupno"
                      type="text"
                      placeholder="Jobgroup No"
                      name="jobgroupno"
                      value={input.jobgroupno}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Jobgroup Name</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupJobgroupname"
                      type="text"
                      placeholder="Jobgroup Name"
                      name="jobgroupname"
                      value={input.jobgroupname}
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
                    <InputGroup.Text>Jobgroup Description</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupjobgroupdescription"
                      type="text"
                      placeholder="Enter Job Group Description Here"
                      name="jobgroupdescription"
                      as="textarea"
                      rows={3}
                      value={input.jobgroupdescription}
                      onChange={handleChange}
                    />
                    <Button type="submit" variant="success">
                      Add Jobgroup
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
                    ? "No JobGroups in the Database"
                    : `Showing ${totalCount} JobGroups in the database.`}
                </h4>
                <JobGroupTable
                  jobgroups={aJobGroups}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={jobgroups.length}
                  input={input}
                  name="JobGroups"
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

export default JobGroup;
