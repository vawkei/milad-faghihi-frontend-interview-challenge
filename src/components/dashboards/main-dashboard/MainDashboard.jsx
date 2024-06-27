import classes from "./MainDashboard.module.scss";
// import classes from "./MainDashboard.module.css";
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
  console.log(selectedTimeframe);

  const [prevState, setPrevState] = useState();

  const newOccasion = occasions[0];
  // console.log(newOccasion);

  const timeframeChangeHandler = (occasion) => {
    setSelectedTimeframe(occasion);

    const newPrevState = occasion;
    setPrevState(newPrevState);

  };

  const getFilteredData = () => {
    return timeframes.map((item) => ({
      title: item.title,
      current: item.timeframes[selectedTimeframe].current,
      previous: item.timeframes[selectedTimeframe].previous,
    }));
  };

  const filteredData = getFilteredData();
  console.log(filteredData); //MainDashboard.jsx:38 (6) [{…}, {…}, {…}, {…}, {…}, {…}]


  

  return (
    <div className={classes["parent-container"]}>
      <div className={classes["lefthand-card"]}>
        <User
          // getPreviousTimeframes={getPreviousTimeframes}
          timeframeChangeHandler={timeframeChangeHandler}
          selectedTimeframe={selectedTimeframe}
          newOccasion={newOccasion}
        />
      </div>

      <div className={classes["card"]}>
        <JobTimeFrame
          data={filteredData.find((item) => item.title === "job")}
          jobImage={jobImage}
          prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />

        <FunTimeFrame
          data={filteredData.find((item) => item.title === "fun")}
          funImage={funImage}
          prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />

        <LearningTimeFrame
          data={filteredData.find((item) => item.title === "learning")}
          learningImage={learningImage}
          prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />

        <SportTimeFrames
          data={filteredData.find((item) => item.title === "sport")}
          sportImage={sportImage}
          prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />

        <EmailsTimeFrames
          data={filteredData.find((item) => item.title === "emails")}
          emailsImage={emailsImage}
          prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />

        <HealthTimeFrames
          data={filteredData.find((item) => item.title === "health")}
          healthImage={healthImage}
                    prevState={prevState}
          selectedTimeframe={selectedTimeframe}
        />
      </div>
    </div>
  );
};

export default MainDashboard;
