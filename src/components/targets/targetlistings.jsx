import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import TargetTable from "./targetTable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

export default function TargetsListings() {
  //Getters and Setters
  //Initialize Projects
  const [targets, setTargets] = useState([
    {
      empno: "",
      activityno: "",
      task: "",
      ep_Indicator: "",
    },
  ]);

  //initialize Search Field Input
  const [input, setInput] = useState({
    empno: "",
    activityno: "",
    task: "",
    ep_Indicator: "",
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
    fetch("/targets")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTargets(jsonRes));
  });

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
    const allTargets = targets;

    let filtered = allTargets;
    if (input)
      filtered = allTargets.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.empno.toLowerCase(),
            input.activityno.toLowerCase(),
            input.task.toLowerCase(),
            input.ep_Indicator.toLocaleLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedTargets = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
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
            <Row className="m-3">
              <SearchBar
                handleChange={handleChange}
                title="Targets Listed"
                name="task"
                value={input.task}
              />
            </Row>
            <Row className="m-3">
              <h4>
                {totalCount === 0
                  ? "No Targets in the Database"
                  : `Showing ${totalCount} Targets in the database.`}
              </h4>
              <TargetTable
                targets={aTargets}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={targets.length}
                input={input}
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
