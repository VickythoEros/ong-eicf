
import "assets/styles/ActivityHeader.css"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const ActivityItems =({number,unit,text})=>{

    return(
        <div className="activity-items">
            <CircularProgress value={100} color="var(--color-primary-yellow-3) " size="150px" thickness='4px' >
                <CircularProgressLabel className="activity-number-unit">
                    <span className="activity-number" > {number} </span><br/> 
                    <span className="activity-unit" >{unit}</span>
                </CircularProgressLabel>
            </CircularProgress>
            <p> {text} </p>
        </div>
    )
}


const ActivityHeader =({content,title})=>{


    return (
        <div className="activity-header">
            <div className="row align-items-center">
                <div className="col-md-4 my-2 my-md-0">
                    <h1>{title}</h1>
                    <p> {content} </p>
                </div>
                <div className="col-md-8 my-2 my-md-0">
                    <div className="actiivty-items-container">
                        <ActivityItems number="16" unit="ans" text="d'existence" />
                        <ActivityItems number="100" unit="millions" text="de personnes soutenues en 2021" />
                        <ActivityItems number="544" unit="Projets" text="dans 56 pays" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityHeader