import classes from "./Home.module.scss";
// import classes from "./Home.module.css";
import MainDashboard from "../dashboards/main-dashboard/MainDashboard";



const Home = () => {
    return ( 
        <div className={classes.home}>
            {/* <h2>Home</h2> */}
            <MainDashboard />
        </div>
     );
}
 
export default Home;