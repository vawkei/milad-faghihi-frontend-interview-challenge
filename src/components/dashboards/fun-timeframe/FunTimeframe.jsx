import classes from "./FunTimeframe.module.scss";
// import classes from "./FunTimeframe.module.css";
// import { funTimeFrames } from "../../home/TimeFrames";
import Card from "../../ui/card/Card";

const FunTimeFrame = (props) => {
  // const funTimeFramesArray = funTimeFrames;
  // console.log(funTimeFramesArray);
  // {title: 'fun', current: 5, previous: 12}
  console.log(props.data);

  const funTimeFramesArray = Array.isArray(props.data) ? props.data : [props.data]

  console.log(funTimeFramesArray);


  let x = props.prevState

  const getPreviousTimeFrameLabel = (x,prev) => {
    if (x === "daily") {
      return `Yesterday: ${prev} hrs completed`;
    }
    if (x === "weekly") {
      return `Last Week: ${prev} hrs completed`;
    }
    if (x === "monthly") {
      return `Last Month: ${prev} hrs completed`;
    }
    return "";
  };


  return (
    <div className={classes["timeFrame-container"]}>
      <Card className={classes["top-card"]}>
        <img src={props.funImage} alt={props.funImage} />
        <Card className={classes["main-card"]}>
          {funTimeFramesArray.map((jtf) => {
            return (
              <div key={jtf.title} className={classes["frame"]}>
                <ul>
                  <li className={classes["first-row"]}>
                    <h3>
                      {jtf.title.charAt(0).toUpperCase() + jtf.title.slice(1)}
                    </h3>
                    <p className={classes.ellypsis}>...</p>
                  </li>

                  <li className={classes["second-row"]}>
                    <span>
                      <h1>{jtf.current}</h1>
                    </span>
                    <span>
                      <h2>Completed</h2>
                    </span>
                  </li>

                  <div className={classes["third-row"]}>
                    {/* <small>{`Last Week:${jtf.previous} Completed`}</small> */}
                    <small style={{color:"yellow"}}>
                      {getPreviousTimeFrameLabel(
                        props.selectedTimeframe,
                        jtf.previous
                      )}
                    </small>
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

export default FunTimeFrame;
