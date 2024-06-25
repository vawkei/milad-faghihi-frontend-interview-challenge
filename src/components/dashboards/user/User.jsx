import classes from "./User.module.scss";
// import classes from "./User.module.css";
import Card from "../../ui/card/Card";
import avatarImage from "../../../assets/images/avatar.png";
import { occasions } from "../../home/TimeFrames";
import { useState } from "react";

const User = (props) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");
  const newOccasion = occasions[0];
  console.log(newOccasion);

  const handleClick = (occasion) => {
    setSelectedTimeframe(occasion);
    props.timeframeChangeHandler(occasion);
  };

  return (
    <div className={classes["user-container"]}>
      <Card className={classes["top-card"]}>
        <div className={classes["main-image"]}>
          <img src={avatarImage} alt="image" />
        </div>
        <div className={classes.content}>
          <h6>Report for</h6>
          <div className={classes.name}>
            <h2>Stacey</h2>
            <h2>Castillo</h2>
          </div>
        </div>
      </Card>
      <Card className={classes["main-card"]}>
        <ul>
          {newOccasion.map((occasion) => {
            return (
              <li
                key={occasion}
                onClick={() => handleClick(occasion)}
                className={
                  `${selectedTimeframe}` === occasion ? `${classes.active}` : ""
                }>
                &#8250; {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default User;
