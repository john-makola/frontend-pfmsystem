import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import DashBoard from "./components/dashboard";
import CountyMission from "./components/county/countymission";
import CountyVision from "./components/county/countyvision";
import CountyGoals from "./components/county/countygoals";
import AddEmployee from "./components/accounts/addemployee";
import Employees from "./components/accounts/employees";
import Roles from "./components/accounts/roles";
import Department from "./components/accounts/department";
import AddProject from "./components/projects/addproject";
import EditProject from "./components/projects/editProject";
import Projects from "./components/projects/projects";
import AddActivity from "./components/activities/addactivity";
import EditActivity from "./components/activities/editactivity";
import Activities from "./components/activities/activities";
import EditTarget from "./components/targets/edittarget";
import AddWorkplan from "./components/workplans/addworkplan";
import Workplans from "./components/workplans/workplans";
import AddTraining from "./components/trainings/addtraining";
import EditTraining from "./components/trainings/edittraining";
import Trainings from "./components/trainings/trainings";
import Reviews from "./components/reviews/reviews";
import SelfAppraisal from "./components/appraisals/selfappraisal";
import SupervisorAppraisal from "./components/appraisals/supervisorappraisal";
import CommitteeAppraisal from "./components/appraisals/committeeappraisal";
import Appraisals from "./components/appraisals/appraisals";
import AppraisalReviewMeeting from "./components/appraisals/appraisalreviewmeeting";
import Footer from "./components/footer";
import NotFound from "./components/notfound";
import EditDepartment from "./components/accounts/editdepartment";
import JobGroup from "./components/accounts/jobgroup";
import EditJobGroup from "./components/accounts/editjobgroup";
import Designation from "./components/accounts/designation";
import EditDesignation from "./components/accounts/editdesignation";
import AgriliveFishDev from "./components/county/subsectors/agrilivefishdev";
import WaterEnergyEnv from "./components/county/subsectors/waterenergyenv";
import HealthServices from "./components/county/subsectors/healthservices";
import LandsUrbanPlanning from "./components/county/subsectors/landurbanplanning";
import TourisimWildlifeTrade from "./components/county/subsectors/tourismwildlifetrade";
import EducationVocationalTraining from "./components/county/subsectors/educationvocationaltraining";
import FinanceEconomicPlanning from "./components/county/subsectors/financeeconomicplanning";
import OfficeofGovDpGov from "./components/county/subsectors/officeofgovdpgov";
import CountyAssembley from "./components/county/subsectors/countyassembley";
import AddActivityTask from "./components/activities/addactivitytask";
import Tasks from "./components/activities/tasks";
import Targets from "./components/targets/targets";
import StaffReponse from "./components/appraisals/staffresponse";

function PfmsRoutes() {
  return (
    <div className="maintemplate">
      <Switch>
        {/* Main DashBoard */}
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={DashBoard}></Route>

        {/* County Goals */}
        <Route path="/countymission" component={CountyMission}></Route>
        <Route path="/countyvision" component={CountyVision}></Route>
        <Route path="/countyGoals" component={CountyGoals}></Route>

        {/* SubSector Goals */}
        <Route path="/agrilivefishdev" component={AgriliveFishDev}></Route>
        <Route path="/waterenergyenv" component={WaterEnergyEnv}></Route>
        <Route path="/healthservices" component={HealthServices}></Route>
        <Route
          path="/landsurbanplanning"
          component={LandsUrbanPlanning}
        ></Route>
        <Route
          path="/tourismwildlifetrade"
          component={TourisimWildlifeTrade}
        ></Route>
        <Route
          path="/educationvocationaltraining"
          component={EducationVocationalTraining}
        ></Route>
        <Route
          path="/fiananceeconomicplanning"
          component={FinanceEconomicPlanning}
        ></Route>
        <Route path="/officeofgovdpgov" component={OfficeofGovDpGov}></Route>
        <Route path="/countyassembley" component={CountyAssembley}></Route>

        {/* County Employees Sectors & Departments */}
        <Route path="/addemployee" component={AddEmployee}></Route>
        <Route path="/employees" component={Employees}></Route>
        <Route path="/roles" component={Roles}></Route>
        <Route path="/departments" component={Department}></Route>
        <Route path="/editdepartment" component={EditDepartment}></Route>
        <Route path="/department/:id" component={EditDepartment}></Route>
        <Route path="/designations" component={Designation}></Route>
        <Route path="/designations/:id" component={EditDesignation}></Route>
        <Route path="/jobgroups" component={JobGroup}></Route>
        <Route path="/jobgroup/:id" component={EditJobGroup}></Route>

        {/* Sub Sector Routes */}

        {/* County Programmes Projects Targets Workplans and  Activities Training */}
        <Route path="/addproject" component={AddProject}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/project/:id" component={EditProject}></Route>
        <Route path="/addactivity" component={AddActivity}></Route>
        <Route path="/editactivity" component={EditActivity}></Route>
        <Route path="/activities" component={Activities}></Route>
        <Route path="/activity/:id" component={EditActivity}></Route>
        <Route path="/addtasks" component={AddActivityTask}></Route>
        <Route path="/tasks" component={Tasks}></Route>
        <Route path="/task/:id" component={EditActivity}></Route>
        <Route path="/edittarget" component={EditTarget}></Route>
        <Route path="/targets" component={Targets}></Route>
        <Route path="/target/:id" component={EditTarget}></Route>
        <Route path="/addworkplan" component={AddWorkplan}></Route>
        <Route path="/workplans" component={Workplans}></Route>
        <Route path="/addtraining" component={AddTraining}></Route>
        <Route path="/edittraining" component={EditTraining}></Route>
        <Route path="/trainings" component={Trainings}></Route>
        <Route path="/training/:id" component={EditTraining}></Route>

        {/* Staff Appraisal Feedback and Rewvies */}

        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/selfappraisal" component={SelfAppraisal}></Route>
        <Route path="/staffresponse" component={StaffReponse}></Route>
        <Route
          path="/appraisalreviewmeeting"
          component={AppraisalReviewMeeting}
        ></Route>
        {/* General Routes */}

        <Route
          path="/supervisorappraisal"
          component={SupervisorAppraisal}
        ></Route>
        <Route
          path="/committeeappraisal"
          component={CommitteeAppraisal}
        ></Route>
        <Route path="/appraisals" component={Appraisals}></Route>
        <Route path="/not-Found" component={NotFound}></Route>
        <Redirect from="/" exact to="/login" />
        <Redirect to="/dashboard" />
      </Switch>
      <Footer />
    </div>
  );
}

export default PfmsRoutes;
