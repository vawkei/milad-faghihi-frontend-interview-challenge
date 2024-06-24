import classes from "./HealthTimeframe.module.css";
import { healthTimeFrames } from "../../home/TimeFrames";
import Card from "../../ui/card/Card";

const HealthTimeFrames = () => {
  const healthTimeFramesArray = healthTimeFrames;
  console.log(healthTimeFramesArray);

  return (
    <div className={classes["timeFrame-container"]}>
      <Card className={classes["top-card"]}></Card>

      <Card className={classes["main-card"]}>
        {healthTimeFramesArray.map((jtf) => {
          return (
            <div key={jtf.title} className={classes["frame"]}>
              <ul>
                <div className={classes["first-row"]}>
                  <li>
                    <h3>
                      {jtf.title.charAt(0).toUpperCase() + jtf.title.slice(1)}
                    </h3>
                  </li>
                  <p className={classes.ellypsis}>...</p>
                </div>

                <div className={classes["second-row"]}>
                  <h2>{jtf.timeframes.daily.current}</h2>
                  <h4>Completed</h4>
                </div>

                <div className={classes["third-row"]}>
                  <small>{`Last Week:${jtf.timeframes.daily.previous} Completed`}</small>
                </div>
              </ul>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default HealthTimeFrames ;