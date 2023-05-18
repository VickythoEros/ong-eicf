
import { Button } from "@chakra-ui/react";
import "assets/styles/CardAction.css"


const OurFightCard =  ({title,imageSrc})=>{

    return(
        <div 
            className="card-action our-fight-card mx-3 shadow rounded" 
        >
            <img src={imageSrc} alt="fight" className="img-fluid"  />
            <div className="our-fight-card-overlay rounded"  ></div>
            <div 
                className="px-3 text-center" 
                style={{ position: 'absolute', top: "50%" }}
                >
                <p className="text-white fw-bolder" > {title} </p>
            </div>
            <div className="btn-container w-100 px-3">
                <Button 
                    style={{color:'var(--color-primary-yellow)'}}
                    colorScheme='var(--color-primary-yellow)' 
                    className="rounded-pill w-100 py-4 "
                    variant='outline'>
                    Découvrir
                </Button>
            </div>
        </div>
    )
}

export default OurFightCard