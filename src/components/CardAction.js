
import { Link } from "react-router-dom";
import cardImg from "assets/images/card_img.jpeg"
import "assets/styles/CardAction.css"
import { useNavigate } from "react-router-dom";

const CardAction =  ({text,title,link})=>{
    const navigate = useNavigate();


    const showActionDetails = ()=>{
        navigate(!!link?link:"/actions-details")
    }

    return(
        <div 
            className="card-action mt-4 mt-md-0 mx-md-3"
            onClick={showActionDetails}
        >
            <div className="card-action-image-container">
                <img src={cardImg} alt="ONG EICF" className="img-fluid mx-auto w-100 rounded-4" />
            </div>
            <div className="card-action-body pt-3">
                <div className="card-action-head d-flex gap-3 align-items-center ">
                    <h4> {title} </h4>
                    <p>Lorem Ipsum </p>
                </div>
                <p className="fw-bolder pt-2" > {text} </p>

                <Link className="card-link" to={!!link?link:"/actions-details"}> Comprendre </Link>
            </div>
        </div>
    )
}

export default CardAction