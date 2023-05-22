import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import CountyMission from "./county/countymission";
// import CountyVision from "./countyvision";
// import CountyGoals from './county/countygoals';

const ToptabShortcuts = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-0"
      >
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="projects" title="Projects"></Tab>
        <Tab eventKey="activity" title="Activity"></Tab>
        <Tab eventKey="targets" title="Targets"></Tab>
        <Tab eventKey="workplan" title="WorkPlan"></Tab>
        <Tab eventKey="training" title="Training"></Tab>
        <Tab eventKey="feedback" title="Feedback"></Tab>
        <Tab eventKey="staffappraisal" title="Staff Appraisal"></Tab>
      </Tabs>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Target" title="Target"></Tab>
        <Tab eventKey="Activity" title="Activity"></Tab>
        <Tab eventKey="Project" title="Project"></Tab>
        <Tab eventKey="Workplan" title="Targets"></Tab>
        <Tab eventKey="Annual" title="Annual"></Tab>
        <Tab eventKey="semiannual" title="Semi-Annual"></Tab>
        <Tab eventKey="Quaterly" title="Quaterly"></Tab>
        <Tab eventKey="Employee" title="Employee"></Tab>
      </Tabs>
    </div>
  );
};

export default ToptabShortcuts;
