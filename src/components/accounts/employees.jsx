import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import httpservice from "../../services/httpservice";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

import EmployeeTable from "./employeetable";
import Pagination from "../../common/pagination";

export default function Employees() {
  //Getters and Setters
  //Initialize Projects
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(100);

  //initialize Search Field Input
  const [input, setInput] = useState({
    empno: "",
    payroll_num: "",
    surname: "",
    firstname: "",
    other_names: "",
    designation: "",
    jobgroup: "",
    department: "",
    search: "",
  });

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  // const [currentPage, setcurrentPage] = useState(1);
  //get Current Items
  //Load Data from the Server
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

  //SearchBar Handler
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

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

  ///getPaged  Data Function

  function getPagedData() {
    try {
      const allUsers = users;

      let filtered = allUsers;
      if (input)
        filtered = allUsers.filter((p) => {
          return Object.values(p)
            .join("")
            .toLowerCase()
            .includes(
              input.search.toLocaleLowerCase(),
              input.empno.toLowerCase(),
              input.payroll_num.toLowerCase(),
              input.surname.toLowerCase(),
              input.firstname.toLowerCase(),
              input.other_names.toLowerCase(),
              input.designation.toLowerCase(),
              input.jobgroup.toLowerCase(),
              input.department.toLowerCase()
            );
        });

      const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

      const paginatedUsers = paginate(sorted, currentPage, pageSize);

      return {
        totalCount: filtered.length,
        pUsers: paginatedUsers,
      };
    } catch (error) {
      console.log(error);
    }
  }
  const { totalCount, pUsers } = getPagedData();

  const handleSort = (sortColumn) => {
    try {
      setsortColumn(sortColumn);
    } catch (error) {
      console.log(error);
    }
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setpageSize(100);
    setcurrentPage(page);
    console.log(page);
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
            <Row className="m-3">
              <SearchBar
                handleChange={handleChange}
                name="search"
                value={input.search}
              />
            </Row>

            <Row className="m-3">
              <h4>
                Showing {pUsers.length} Employees {"Page:=>"} {currentPage}
                {" -----"}
                Total {users.length} in the database.
              </h4>
              <Row className="m-3">
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </Row>
              <EmployeeTable
                users={pUsers}
                loading={loading}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={users.length}
                input={input}
                name="Employees"
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
          </Col>
        </Row>
      </Row>
    </div>
  );
}
