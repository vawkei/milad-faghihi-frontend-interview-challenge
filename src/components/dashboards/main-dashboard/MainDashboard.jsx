import classes from "./MainDashboard.module.css";
import JobTimeFrame from "../job-timeframe/JobTimeframe";
import FunTimeFrame from "../fun-timeframe/FunTimeframe";
import LearningTimeFrame from "../learning-timeframe/LearningTimeframe";
import SportTimeFrames from "../sport-timeframe/SportTimeframe";
import EmailsTimeFrames from "../emails-timeframe/EmailsTimeframe";
import HealthTimeFrames from "../health-timeframe/HealthTimeframe";
import User from "../user/User";
import jobImage from "../../../assets/images/job.svg";
import funImage from "../../../assets/images/fun.svg";
import learningImage from "../../../assets/images/learning.svg";
import sportImage from "../../../assets/images/sport.svg";
import emailsImage from "../../../assets/images/emails.svg";
import healthImage from "../../../assets/images/health.svg";

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
        <JobTimeFrame jobImage={jobImage} />
        <FunTimeFrame funImage={funImage} />
        <LearningTimeFrame learningImage={learningImage} />
        <SportTimeFrames sportImage={sportImage} />
        <EmailsTimeFrames emailsImage={emailsImage} />
        <HealthTimeFrames healthImage={healthImage} />
      </div>
    </div>
  );
};

export default MainDashboard;
