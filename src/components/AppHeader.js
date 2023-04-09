import "assets/styles/AppHeader.css"
const { default: AppButton } = require("./AppButton")


const AppHeader =({content,title,showButton=true})=>{


    return (
        <div className="header">
            <div className="row">
                <div className="col-md-7">
                    <h1>{title}</h1>
                    <p> {content} </p>
                    { showButton && <AppButton title="Nous connaitre" />}
                </div>
            </div>
        </div>
    )
}

export default AppHeader