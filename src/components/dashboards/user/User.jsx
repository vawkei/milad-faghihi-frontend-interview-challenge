import Card from "../../ui/card/Card";
import classes from "./User.module.css";
import avatarImage from "../../../assets/images/avatar.png";
import { occasions } from "../../home/TimeFrames";

const User = () => {
  const newOccasion = occasions[0];
  console.log(newOccasion);

  return (
    <div className={classes["user-container"]}>
      <Card className={classes["top-card"]}>
        <div className={classes["main-image"]}>
          <img src={avatarImage} alt="image"  />
        </div>
        <div className={classes.content}>
            <h6>Report for</h6>
            <h2>Stacey</h2>
            <h2>Castillo</h2>
        </div>
      </Card>
      <Card className={classes["main-card"]}>
        <ul>
          {newOccasion.map((occasion) => {
            return <li key={occasion}>{occasion.charAt(0).toUpperCase() + occasion.slice(1)}</li>;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default User;
