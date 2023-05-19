

import "assets/styles/AppButton.css"


export default  function AppButton ({title,className=""}){


    return(
        <button  className={`app-button mx-md-0 mx-1 ${className} `}>
            {title}
        </button>
    )
}


export  function AppButtonRapport ({icon,title}){


    return(
        <button  className="app-button-rapport mx-md-0 mx-1 d-flex justify-content-between align-items-center gap-1 " >
           {icon} {title}
        </button>
    )
}