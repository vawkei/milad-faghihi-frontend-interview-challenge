import classes from "./User.module.scss";
// import classes from "./User.module.css";
import Card from "../../ui/card/Card";
import avatarImage from "../../../assets/images/avatar.png";

const User = (props) => {
  const newOccasion = props.newOccasion;
  console.log(newOccasion); //resuly of console.log: ['daily', 'weekly', 'monthly']
  const lisa = props.selectedTimeframe;
  console.log(lisa);

  const handleClick = (occasion) => {
    props.timeframeChangeHandler(occasion);
    console.log(lisa);
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
          {newOccasion.map((occasion, index) => {
            return (
              <li
                key={index}
                type="button"
                className={
                  props.selectedTimeframe === occasion ? classes.active : ""
                }
                onClick={() => handleClick(occasion)}>
                <span>&#8250;</span>{" "}
                {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default User;
