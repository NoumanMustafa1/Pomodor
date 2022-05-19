import { CircularProgressbar } from 'react-circular-progressbar';
import  Slidebar from "./Components/slider";

let percentage =75;
    const Stat =()=> {

    return (

        <div>
            <h1>Stat</h1>
            <div className="stats-overview">
                <div className="mini">
                <CircularProgressbar style={{padding: "10px"}}   value={percentage} text={`${percentage}%`} /> 
                <p className="CenteredPara">Work Time</p>
                </div>
                <div className="mini">
                <CircularProgressbar style={{padding: "10px"}}  value={100-percentage} text={`${100-percentage}%`} /> 
                <p className="CenteredPara">Rest Time</p>
                </div>
                <div className="mini"></div>
                <div className="mini"></div>
            </div>
        </div>
    )
};



export default Stat;