
import { Link } from "react-router-dom";
import cardImg from "assets/images/card_img.jpeg"
import "assets/styles/CardAction.css"


const CardAction =  ()=>{

    return(
        <div className="card-action mt-4 mt-md-0 mx-md-3">
            <div className="card-action-image-container">
                <img src={cardImg} alt="ONG EICF" className="img-fluid mx-auto w-100 rounded-4" />
            </div>
            <div className="card-action-body pt-3">
                <div className="card-action-head d-flex gap-3 align-items-center ">
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem Ipsum </p>
                </div>
                <p className="fw-bolder pt-2" >
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                </p>

                <Link className="card-link" to={"#"}> Comprendre </Link>
            </div>
        </div>
    )
}

export default CardAction