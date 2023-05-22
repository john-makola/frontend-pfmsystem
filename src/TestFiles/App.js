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
import AddTarget from "./components/targets/addtarget";
import EditTarget from "./components/targets/edittarget";
import TargetListings from "./components/targets/targetlistings";
import AddWorkplan from "./components/workplans/addworkplan";
import Workplans from "./components/workplans/workplans";
import AddTraining from "./components/trainings/addtraining";
import EditTraining from "./components/trainings/edittraining";
import Trainings from "./components/trainings/trainings";
import EmployeeFeedback from "./components/feedbacks/employeefeedback";
import SupevisorFeedback from "./components/feedbacks/supervisorfeedback";
import HrFeedback from "./components/feedbacks/hrfeedback";
import Feedbacks from "./components/feedbacks/feedbacks";
import QuarterlyReview from "./components/reviews/quarterlyreview";
import MidYearReview from "./components/reviews/midyearreview";
import AnnualReview from "./components/reviews/annualreview";
import Reviews from "./components/reviews/reviews";
import SelfAppraisal from "./components/appraisals/selfappraisal";
import SupervisorAppraisal from "./components/appraisals/supervisorappraisal";
import CommitteeAppraisal from "./components/appraisals/committeeappraisal";
import Appraisals from "./components/appraisals/appraisals";
import Footer from "./components/footer";
import NotFound from "./components/notfound";
import EditDepartment from "./components/accounts/editdepartment";
import JobGroup from "./components/accounts/jobgroup";
import EditJobGroup from "./components/accounts/editjobgroup";
import Designation from "./components/accounts/designation";
import EditDesignation from "./components/accounts/editdesiggnation";
import CountServiceBoard from "./components/feedbacks/csbfeedback";

function App() {
  return (
    <div className="maintemplate">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/dashboard" component={DashBoard}></Route>
        <Route path="/countymission" component={CountyMission}></Route>
        <Route path="/countyvision" component={CountyVision}></Route>
        <Route path="/countyGoals" component={CountyGoals}></Route>
        <Route path="/addemployee" component={AddEmployee}></Route>
        <Route path="/employees" component={Employees}></Route>
        <Route path="/roles" component={Roles}></Route>
        <Route path="/departments" component={Department}></Route>
        <Route path="/department/:id" component={EditDepartment}></Route>
        <Route path="/designations" component={Designation}></Route>
        <Route path="/designations/:id" component={EditDesignation}></Route>
        <Route path="/jobgroups" component={JobGroup}></Route>
        <Route path="/jobgroup/:id" component={EditJobGroup}></Route>
        <Route path="/addproject" component={AddProject}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/project/:id" component={EditProject}></Route>
        <Route path="/addactivity" component={AddActivity}></Route>
        <Route path="/editactivity" component={EditActivity}></Route>
        <Route path="/activities" component={Activities}></Route>
        <Route path="/activity/:id" component={EditActivity}></Route>
        <Route path="/addtarget" component={AddTarget}></Route>
        <Route path="/edittarget" component={EditTarget}></Route>
        <Route path="/targetlistings" component={TargetListings}></Route>
        <Route path="/target/:id" component={EditTarget}></Route>
        <Route path="/addworkplan" component={AddWorkplan}></Route>
        <Route path="/workplans" component={Workplans}></Route>
        <Route path="/addtraining" component={AddTraining}></Route>
        <Route path="/edittraining" component={EditTraining}></Route>
        <Route path="/trainings" component={Trainings}></Route>
        <Route path="/training/:id" component={EditTraining}></Route>
        <Route path="/employeefeedback" component={EmployeeFeedback}></Route>
        <Route path="/supervisorfeedback" component={SupevisorFeedback}></Route>
        <Route path="/hrfeedback" component={HrFeedback}></Route>
        <Route path="/csbfeedback" component={CountServiceBoard}></Route>
        <Route path="/quarterlyreview" component={QuarterlyReview}></Route>
        <Route path="/midyearreview" component={MidYearReview}></Route>
        <Route path="/annualreview" component={AnnualReview}></Route>
        <Route path="/reviews" component={Reviews}></Route>
        <Route path="/selfappraisal" component={SelfAppraisal}></Route>
        <Route path="/roles" component={Roles}></Route>
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

export default App;
