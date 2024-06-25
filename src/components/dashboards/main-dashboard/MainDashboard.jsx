import classes from "./MainDashboard.module.css";
import { timeframes } from "../../home/TimeFrames";
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
import { occasions } from "../../home/TimeFrames";
import { useState } from "react";

const MainDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  const newOccasion = occasions[0];
  console.log(newOccasion);

  const timeframeChangeHandler = (occasion) => {
    setSelectedTimeframe(occasion);
  };

  const getFilteredData = () => {
    return timeframes.map((item) => ({
      title: item.title,
      current: item.timeframes[selectedTimeframe].current,
      previous: item.timeframes[selectedTimeframe].previous,
    }));
  };

  const filteredData = getFilteredData();
  console.log(filteredData);

  return (
    <div className={classes["parent-container"]}>
      <div className={classes["lefthand-card"]}>
        <User
          filteredData={filteredData}
          timeframeChangeHandler={timeframeChangeHandler}
        />
      </div>

      <div className={classes["card"]}>
        <JobTimeFrame 
        data={filteredData.find((item) => item.title === "job")}
        jobImage={jobImage} />
        
        <FunTimeFrame 
        data={filteredData.find((item) => item.title === "fun")}
        funImage={funImage} />

        <LearningTimeFrame 
        data={filteredData.find((item) => item.title === "learning")}
        learningImage={learningImage} />

        <SportTimeFrames 
        data={filteredData.find((item) => item.title === "sport")}
        sportImage={sportImage} />

        <EmailsTimeFrames 
        data={filteredData.find((item) => item.title === "emails")}
        emailsImage={emailsImage} />
        
        <HealthTimeFrames 
        data={filteredData.find((item) => item.title === "health")}
        healthImage={healthImage} />
      </div>
    </div>
  );
};

export default MainDashboard;
