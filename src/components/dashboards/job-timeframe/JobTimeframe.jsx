 import classes from "./JobTimeframe.module.scss"
// import classes from "./JobTimeframe.module.css";
import { jobTimeFrames } from "../../home/TimeFrames";
import Card from "../../ui/card/Card";

const JobTimeFrame = (props) => {
  // const jobTimeFrameArray = jobTimeFrames;
  // console.log(jobTimeFrameArray);
  console.log(props.data);
  

  const jobTimeFramesArray = Array.isArray(props.data) ? props.data : [props.data];
  console.log(jobTimeFramesArray);


  return (
    <div className={classes["timeFrame-container"]}>
      <Card className={classes["top-card"]}>
        <img src={props.jobImage} alt="" />
        <Card className={classes["main-card"]}>
          {jobTimeFramesArray.map((jtf,index) => {
            return (
              <div key={index} className={classes["frame"]}>
                <ul>
                  
                  <li className={classes["first-row"]}>
                    <h3>
                      {jtf.title.charAt(0).toUpperCase() + jtf.title.slice(1)}
                    </h3>
                    <p className={classes.ellypsis}>...</p>
                  </li>

                  <li className={classes["second-row"]}>
                    <span><h1>{jtf.current}</h1></span>
                    <span><h2>Completed</h2></span>
                  </li>
                  <div className={classes["third-row"]}>
                    <small>{`Last Week:${jtf.previous} Completed`}</small>
                  </div>
                </ul>
              </div>
            );
          })}
        </Card>
      </Card>
    </div>
  );
};

export default JobTimeFrame;
