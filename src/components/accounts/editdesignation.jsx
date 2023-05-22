import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import DesignationTable from "./designationtable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";

const EditDesignation = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

  const [designations, setDesignations] = useState([
    {
      designationno: "",
      designationname: "",
      designationdescription: "",
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
    designationno: "",
    designationname: "",
    designationdescription: "",
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
    setpageSize(50);
  }

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newDesignation = {
        designationno: input.designationno,
        designationname: input.designationname,
        designationdescription: input.designationdescription,
      };
      axios.post("http://localhost:3001/createdesignation", newDesignation);
      setValidated(true);
      setEntryadded("1 Designation added to the Database");
      setInput({
        designationno: "",
        designationname: "",
        designationdescription: "",
      });
    }
    setValidated(false);
  };

  //Load Data from the Server
  useEffect(() => {
    fetch("/designations")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDesignations(jsonRes));
  });

  //handle filtered Data
  function getPagedData() {
    const allDesignations = designations;

    let filtered = allDesignations;
    if (input)
      filtered = allDesignations.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.designationno.toLowerCase(),
            input.designationname.toLowerCase(),
            input.designationdescription.toLocaleLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedDesignations = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aDesignations: paginatedDesignations,
    };
  }
  const { totalCount, aDesignations } = getPagedData();

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
          <NavBarMain currentuser={currentuser} />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={currentuser} />
          </Col>
          <Col md="9">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-3">
                <h2>Designation Details</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add a <strong> Designation</strong> to the System
                  </h6>
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Designation No</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupdesignationno"
                      type="text"
                      placeholder="Designation No"
                      name="designationno"
                      value={input.designationno}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Designation Name</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupDesignationname"
                      type="text"
                      placeholder="Designation Name"
                      name="designationname"
                      value={input.designationname}
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
                    <InputGroup.Text>Designation Description</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupdesignationdescription"
                      type="text"
                      placeholder="Enter Designation Description Here"
                      name="designationdescription"
                      as="textarea"
                      rows={3}
                      value={input.designationdescription}
                      onChange={handleChange}
                    />
                    <Button type="submit" variant="success">
                      Add Designation
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
                    ? "No Designations in the Database"
                    : `Showing ${totalCount} Designations in the database.`}
                </h4>
                <DesignationTable
                  designations={aDesignations}
                  onSort={handleSort}
                  sortColumn={sortColumn}
                  count={designations.length}
                  input={input}
                  name="Designations"
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

export default EditDesignation;
