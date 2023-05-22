import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { Link } from "react-router-dom";

const AddProjects = ({
  fisicalyear,
  review,
  status,
  startdate,
  enddate,
  user,
  projectno,
  projectname,
  department,
  donor,
  budget,
  projectdescription,
  specialnotes,
  handleChange,
  users,
  departments,
}) => {
  return (
    <div>
      <Row className="m-5 adddataform">
        <Row className="m-3">
          <h2>Add New Project </h2>

          <div className="sectiondescription">
            <h6 className="leading">
              Add a <strong>new Project </strong> to the System
            </h6>
            A<strong> Project Program </strong> is an undertaking by any of the
            County Departments, carried out individually or collaboratively to
            achieve a particular objective inline with the County Development
            Goals.{" "}
          </div>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} md="4">
            <InputGroup>
              <InputGroup.Text>Fisical Year</InputGroup.Text>
              <Form.Select
                type="text"
                placeholder="Role"
                name="fisicalyear"
                value={fisicalyear}
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
                value={review}
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
                value={status}
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
                  value={startdate}
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
                  value={enddate}
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
                value={user}
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
                value={projectno}
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
                value={projectname}
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
                value={department}
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
                value={donor}
                onChange={handleChange}
              >
                <option value="County Government">County Gorvernment</option>
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
                  CGI and National Govt, World Food Programme and Development
                  partners
                </option>
                <option value="CGI WFP Action Aid and development partners">
                  CGI WFP Action Aid and development partners
                </option>
                <option value="GoK,CGI CARITAS, Kenya  RAPID,World Food Programme Anglican Development Service(ADS), Mercy CORPS">
                  GoK,CGI CARITAS, Kenya RAPID,World Food Programme Anglican
                  Development Service(ADS), Mercy CORPS
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
                value={budget}
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
                value={projectdescription}
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
                value={specialnotes}
                onChange={handleChange}
                rows={3}
              />
            </InputGroup>
          </Form.Group>
        </Row>
      </Row>
    </div>
  );
};

export default AddProjects;
