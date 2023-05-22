import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import TargetsTable from "./workplanTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";

const WorkPlan = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

  const [targets, setTargets] = useState([
    {
      empno: "",
      activityno: "",
      task: "",
      ep_Indicator: "",
      startdate: "",
      enddate: "",
    },
  ]);

  const [employees, setEmployees] = useState([
    {
      _id: "",
      empno: "",
      firstname: "",
    },
  ]);
  const [activities, setActivities] = useState([
    {
      _id: "",
      activityno: "",
      activityname: "",
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
    empno: "",
    activityno: "",
    task: "",
    ep_Indicator: "",
    startdate: "",
    enddate: "",
  });

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
      const newTarget = {
        employee: input.empno,
        activity: input.activityno,
        task: input.task,
        ep_Indicator: input.ep_Indicator,
        startdate: input.startdate,
        enddate: input.enddate,
      };
      axios.post("http://localhost:3001/createtarget", newTarget);
      setValidated(true);
      setEntryadded("1 Target added to the Database");
      setInput({
        // empno: "",
        // activityno: "",
        empno: "",
        activityno: "",
        task: "",
        ep_Indicator: "",
        startdate: "",
        enddate: "",
      });
    }
    setValidated(false);
    setpageSize(50);
  };

  //Load Data from the Server
  useEffect(() => {
    fetch("/targets")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTargets(jsonRes))
      .catch((error) => {
        console.log(error);
      });
  });

  //Load Data  Employeesfrom the Server
  useEffect(() => {
    fetch("/employees")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setEmployees(jsonRes))
      .catch((error) => {
        console.log(error);
      });
  });

  //Load Data  Activity from the Server
  useEffect(() => {
    fetch("/activities")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setActivities(jsonRes))
      .catch((error) => {
        console.log(error);
      });
  });

  //handle allTargets Data
  function getPagedData() {
    const allTargets = targets;

    const sorted = _.orderBy(allTargets, [sortColumn.path], [sortColumn.order]);

    const paginatedTargets = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: allTargets.length,
      aTargets: paginatedTargets,
    };
  }
  const { totalCount, aTargets } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  return (
    <div>
      <Row>
        <Row className="m-5">
          <NavBarMain />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral />
          </Col>
          <Col md="9">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-5 adddataform">
                <Row className="m-3">
                  <h2>Target Details</h2>

                  <div className="sectiondescription">
                    <h6 className="leading">
                      Add a <strong> Target</strong> to the System
                    </h6>
                  </div>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Employee No </InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroupEmpNo"
                        type="text"
                        placeholder="Employee No"
                        name="empno"
                        value={input.empno}
                        onChange={handleChange}
                        list="Employees"
                      />

                      <datalist id="Employees">
                        {employees.map((e) => (
                          <option value={e._id}>
                            {e.empno + " " + e.firstname}
                          </option>
                        ))}
                      </datalist>
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Activity No</InputGroup.Text>
                      <Form.Select
                        required
                        type="text"
                        placeholder="Activity No"
                        name="activityno"
                        value={input.activityno}
                        onChange={handleChange}
                      >
                        {activities.map((a) => (
                          <option value={a._id}>
                            {a.activityno + "----" + a.activityname}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <InputGroup.Text>Target Name/ Task</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupTask"
                        type="text"
                        placeholder="Target Name"
                        name="task"
                        value={input.task}
                        onChange={handleChange}
                      />
                    </InputGroup>

                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <InputGroup.Text>Perfomance Indicator</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupperfomanceIndicator"
                        type="text"
                        placeholder="Enter Perfomance Indicator Here"
                        name="ep_Indicator"
                        value={input.ep_Indicator}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Start Date--</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupStartDate"
                        type="date"
                        name="startdate"
                        value={input.startdate}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mx-auto">
                    <InputGroup>
                      <InputGroup.Text>Completion Date--</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupEndDate"
                        type="date"
                        name="enddate"
                        value={input.enddate}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                      <Button type="submit" variant="success">
                        Add Target
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
                  <h5>{entryadded ? entryadded : null}</h5>
                </Row>
              </Row>
              <Row className="m-3">
                <h4>
                  {totalCount === 0
                    ? "No Targets in the Database"
                    : `Showing ${totalCount} Targets in the database.`}
                </h4>
                <TargetsTable
                  targets={aTargets}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={targets.length}
                  input={input}
                  name="Targets"
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

export default WorkPlan;
