import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import _ from "lodash";
import httpservice from "../../services/httpservice";
import { ToastContainer, toast } from "react-toastify";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SelfAppraisalTable from "./selfAppraisalTable";
import AddSelfAppraisal from "./addselfAppraisal";
import TotalMeanScore from "./totalmeanscore";
import RatingScale from "./ratingscale";

const SelfAppraisal = () => {
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
  const userid = currentuser._id;

  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [selfappraisal, setSelfappraisal] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [targets, setTargets] = useState([]);
  const [addrecord, setAddRecord] = useState(false);

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(50);
  const [currentPage, setcurrentPage] = useState(1);
  const [input, setInput] = useState({
    user: userid,
    task: "",
    agreedperformance: "",
    performanceindicator: "",
    achievedresults: "",
    scorerating: "",
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
      const newSelfRating = {
        user: input.user,
        task: input.task,
        target: input.agreedperformance,
        performanceindicator: input.performanceindicator,
        achievedresults: input.achievedresults,
        scorerating: input.scorerating,
      };
      axios.post("http://localhost:3001/createselfappraisal", newSelfRating);
      setValidated(true);
      setAddRecord(true);
      setEntryadded("1 Target added to the Database");
      setInput({
        user: userid,
        task: "",
        agreedperformance: "",
        performanceindicator: "",
        achievedresults: "",
        scorerating: "",
      });
    }
    setValidated(false);
    setAddRecord(false);
    setpageSize(50);
  };
  //Load Data Targets from the Server

  useEffect(() => {
    httpservice
      .get("/targets")
      .then((response) => {
        setTargets(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Targets Data");
        }
      });
  }, [targets]);

  //Load Data Tasks from the Server

  useEffect(() => {
    httpservice
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Tasks Data");
        }
      });
  }, [tasks]);

  //Load Data Tasks from the Server

  useEffect(() => {
    httpservice
      .get("/selfappraisal" + "/" + userid)
      .then((response) => {
        setSelfappraisal(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Selfappraisal Data");
        }
      });
  }, [selfappraisal]);

  useEffect(() => {
    const fetchSelfAppraisal = async () => {
      setLoading(true);

      const res = await axios.get("/selfappraisal" + "/" + userid);
      setSelfappraisal(res.data);
      setLoading(false);
    };
    fetchSelfAppraisal().catch((ex) => {});
  }, [selfappraisal]);

  //handle allTasks Data
  function getPagedData() {
    const allSelfappraisal = selfappraisal;

    const sorted = _.orderBy(
      allSelfappraisal,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedSelfappraisal = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: allSelfappraisal.length,
      aTasks: paginatedSelfappraisal,
    };
  }
  const { totalCount, aSelfappraisal } = getPagedData();

  //handle SelfScoreTotal MeanScore Data
  // let total = 0;

  // function computeTotalMean() {
  //   total = selfappraisal.scorerating.reduce(
  //     (total, currentValue) =>
  //       (total = total + parseInt(currentValue.scorerating)),
  //     0
  //   );
  //   return total;
  // }

  const totalScore = 0;
  let meanscore = 0;

  totalScore > 0
    ? (meanscore = totalScore / selfappraisal.length)
    : (meanscore = 0);

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const {
    task,
    agreedperformance,
    performanceindicator,
    achievedresults,
    scorerating,
  } = input;

  console.log(selfappraisal);
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
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>Self Appraisal </h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>
            <Row className="m-3">
              <Col></Col>
              <Col md="2">
                <Modal
                  size="lg"
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  dialogClassName="modal-90w"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Self Appraisal Form</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddSelfAppraisal
                        handleChange={handleChange}
                        entryadded={entryadded}
                        tasks={tasks}
                        targets={targets}
                        task={task}
                        agreedperformance={agreedperformance}
                        performanceindicator={performanceindicator}
                        achievedresults={achievedresults}
                        scorerating={scorerating}
                        loading={loading}
                      />
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        type="submit"
                        variant="success"
                        onClick={handleClose}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Col>
            </Row>

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Agreed Perfomance Targets in the Database"
                  : `Showing ${totalCount} Agreed Perfomance Targets in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Agreed Perfomance Target
                </Button>
              </Col>

              <SelfAppraisalTable
                selfappraisal={aSelfappraisal}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={selfappraisal.length}
                input={input}
                loading={loading}
                name="Targets"
              />
            </Row>
            <Row>
              <Col>
                <TotalMeanScore totalScore={totalScore} meanscore={meanscore} />
              </Col>
              <Col md="7">
                <RatingScale />
              </Col>
            </Row>

            <Row className="m-3">
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default SelfAppraisal;
