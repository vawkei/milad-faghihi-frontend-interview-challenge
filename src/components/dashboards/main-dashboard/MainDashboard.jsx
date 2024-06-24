import classes from "./MainDashboard.module.css";


import {


  
  sportTimeFrames,
  emailTimeFrames,
  healthTimeFrames,
} from "../../home/TimeFrames";
import JobTimeFrame from "../job-timeframe/JobTimeframe";
import FunTimeFrame from "../fun-timeframe/FunTimeframe";
import LearningTimeFrame from "../learning-timeframe/LearningTimeframe";
import SportTimeFrames from "../sport-timeframe/SportTimeframe";
import EmailsTimeFrames from "../emails-timeframe/EmailsTimeframe";
import HealthTimeFrames from "../health-timeframe/HealthTimeframe";
import User from "../user/User";


const MainDashboard = () => {
//   const sortedTimeFrames = [
//     jobTimeFrames,
//     funTimeFrames,
//     learningTimeFrames,
//     sportTimeFrames,
//     emailTimeFrames,
//     healthTimeFrames,
//   ];
//   console.log(sortedTimeFrames)

  return (
    <div className={classes["parent-container"]}>
      <div className={classes["lefthand-card"]}>
        <User />
      </div>
      
      <div className={classes["card"]}>
        <JobTimeFrame />
        <FunTimeFrame />
        <LearningTimeFrame />
        <SportTimeFrames />
        <EmailsTimeFrames />
        <HealthTimeFrames />
      </div>
    </div>
  );
};

export default MainDashboard;
