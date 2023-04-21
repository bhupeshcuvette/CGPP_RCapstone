import Profile from "../components/Homepage/ProfileInfo";
import Weather from "../components/Homepage/Weather";
import News from "../components/Homepage/News";
import Notes from "../components/Homepage/Notes";
import {useNavigate} from "react-router-dom";

const Homepage =()=>{
    const donavigate=useNavigate();

    const handleClick=()=>{
        donavigate("/browse");
    }
    return(
        <div style={{width:"100vw",height:"100vh"}}>
        <div style={{display:"flex",gap:"15px"}}>
        <div>
            <Profile/>
            <Weather/>
        </div>
        <div>
            <Notes/>
        </div>
        <div>
            <News/>
        </div>
        </div>
        <button onClick={handleClick} style={{width:"80px",height:"30px",background: "#148A08",color:"white",fontFamily:"Roboto",fontSize:"normal",borderRadius:"19px",marginLeft:"1200px",marginTop:"175px"}}>Browse</button>
        </div>
        
    )
}

export default Homepage;