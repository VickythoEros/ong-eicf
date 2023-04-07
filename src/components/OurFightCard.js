
import { Link } from "react-router-dom";
import "assets/styles/CardAction.css"


const OurFightCard =  ({title,imageSrc})=>{

    return(
        <div 
            className="our-fights-card mt-4 mt-md-2 shadow-4"
            style={{
                backgroundImage:`linear-gradient(to bottom, rgba(200, 200, 200, 0), rgba(200, 200, 200,0), rgba(0, 0, 0, 0.99)),url(${imageSrc})`
            }}
         >
            <div className="our-fight-card-body">
                <h3 className="mb-5" >
                    {title}
                </h3>
                <Link className="card-link" to={"#"}> Decouvrir le combat </Link>
            </div>
        </div>
    )
}

export default OurFightCard