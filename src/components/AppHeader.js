import "assets/styles/AppHeader.css"
const { default: AppButton } = require("./AppButton")


const AppHeader =({content,title})=>{


    return (
        <div className="header">
            <div className="row">
                <div className="col-md-7">
                    <h1>{title}</h1>
                    <p> {content} </p>
                    <AppButton title="Nous connaitre" />
                </div>
            </div>
        </div>
    )
}

export default AppHeader