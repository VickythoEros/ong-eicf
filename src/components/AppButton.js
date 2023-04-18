

import "assets/styles/AppButton.css"


export default  function AppButton ({title}){


    return(
        <button  className="app-button mx-md-0 mx-1" >
            {title}
        </button>
    )
}