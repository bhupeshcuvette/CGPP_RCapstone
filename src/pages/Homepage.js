import Profile from "../components/Homepage/ProfileInfo";
import Weather from "../components/Homepage/Weather";
import News from "../components/Homepage/News";
import Notes from "../components/Homepage/Notes";

const Homepage =()=>{
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
        </div>
        
    )
}

export default Homepage;