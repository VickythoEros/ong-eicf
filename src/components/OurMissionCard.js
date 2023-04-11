import { Link } from "react-router-dom"
import "assets/styles/OurMissionCard.css"



const OurMissionCard =  ({imageSrc,linkText})=>{

    return(
        <div 
            className="our-mission-card mt-4 mt-md-2 shadow-4"
            style={{
                backgroundImage:`linear-gradient(to bottom, rgba(200, 200, 200, 0), rgba(200, 200, 200,0), rgba(0, 0, 0, 0.99)),url(${imageSrc})`
            }}
         >
            <div className="our-mission-card-body">
                <Link className="mission-card-link" to={"#"}> {!!linkText? linkText : "Notre mission"} </Link>
            </div>
        </div>
    )
}

export default OurMissionCard