
import "assets/styles/ActivityHeader.css"



const ActivityItems =({number,unit,text})=>{

    return(
        <div className="activity-items shadow mt-4 mx-md-3 rounded text-center">
            <div className="activity-number-unit py-3">
                <p className="activity-number" > {number} </p>
                <p className="activity-unit"> {unit} </p>
            </div>
            <div className="activity-text-container px-2">
                <p className="activity-text" > {text} </p>
            </div>
        </div>
    )
}



function ActivityHeader({activiies}) {
    return (
      <div className="d-flex flex-wrap jusitfy-content-between align-items-center "  >
        {
            activiies?.map((activity,index)=>(
                <ActivityItems {...activity} key={index} />
            ))
        }
      </div>
    );
  }
  



export default ActivityHeader