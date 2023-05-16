
import "assets/styles/CardAction.css"
import { Button } from "@chakra-ui/react";


const OurFightCard =  ({title,imageSrc})=>{

    return(
        <div 
            className="card-action mx-3 shadow rounded" 
            style={{ height:"30rem",  }}>

            <img src={imageSrc} alt="fight" className="w-100 h-100 img-fluid rounded" />
            <div
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                }}
            ></div>
            <div className="px-3" style={{ position: 'absolute', top: "50%" }}>
                <p className="text-white fs-4 fw-bolder" > {title} </p>
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
    )
}

export default OurFightCard