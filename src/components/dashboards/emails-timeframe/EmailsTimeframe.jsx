import classes from "./EmailsTimeframe.module.scss";
//import classes from "./EmailsTimeframe.module.css";
// import { emailTimeFrames } from "../../home/TimeFrames";
import Card from "../../ui/card/Card";

const EmailsTimeFrames = (props) => {
  // const emailTimeFramesArray = emailTimeFrames;
  // console.log(emailTimeFramesArray);

  console.log(props.data);
  const emailsTimeFramesArray = Array.isArray(props.data)
    ? props.data
    : [props.data];
  console.log(emailsTimeFramesArray);

  return (
    <div className={classes["timeFrame-container"]}>
      <Card className={classes["top-card"]}>
        <img src={props.emailsImage} alt={props.emailsImage} />
        <Card className={classes["main-card"]}>
          {emailsTimeFramesArray.map((jtf) => {
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

export default EmailsTimeFrames;
