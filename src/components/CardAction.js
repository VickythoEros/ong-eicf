
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "assets/styles/CardAction.css"
import { Button } from "@chakra-ui/react";

const CardAction =  ({date,ville,contenu,link,img})=>{
    const navigate = useNavigate();


    const showActionDetails = ()=>{
        navigate(!!link?link:"/actions-details")
    }

    return(
        <>
        <div 
            className="card-action shadow mt-4 mx-md-3 rounded-4"
            onClick={showActionDetails}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom">
            <div>
                <div className="card-action-image-container">
                    <img src={img} alt="ONG EICF" className="img-fluid mx-auto w-100 rounded-top" />
                </div>
                <div className="card-action-body px-3 text-center pt-3">

                    <h6> {date} </h6>
                    <h4 className="fw-bolder pt-2" > {ville} </h4>
                    
                    <p className="pt-4 " > {contenu} </p>
                   
                    {/*<Link className="card-link" to={!!link?link:"/actions-details"}> Comprendre </Link>*/}
                   
                </div>
                <div className="btn-container w-100 px-3">
                        <Button 
                            style={{color:'var(--color-primary-yellow)'}}
                            colorScheme='var(--color-primary-yellow)' 
                            className="rounded-pill w-100 py-4 "
                            variant='outline'>
                            Comprendre
                        </Button>
                    </div>
            </div>
        </div>
        </>
    )
}

export default CardAction