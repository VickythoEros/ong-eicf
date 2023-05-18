import SlideHeader from "./SlideHeader"
import "assets/styles/AppHeader.css"



const AppHeader =({slidesheader,showButton,action})=>{


    return (
        <div className="my-app-header-container">
            <SlideHeader  slides={slidesheader} action={action} showButton={showButton} />
        </div>
    )
}

export default AppHeader