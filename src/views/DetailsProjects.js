import AppHeader from "components/AppHeader"
import "assets/styles/DetailsProjects.css"

const { default: Layout } = require("components/Layout")


const DetailsProjects =()=>{

    return(
        <Layout>
            <AppHeader
                showButton={false}
                title="NOUS CONNAITRE "
                content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que "
            />

            <div className="other-mission-indicator ">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem 
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5 p-md-5 ">
                <h1 className="h1 fw-bolder text-uppercase">
                    institutions internationales
                </h1>
                <div className="divider"></div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 green-square-container">
                        <div className="green-square"></div>
                    </div>
                    <div className="col-md-9">
                        <h2 className="h2 fw-bolder">
                            Pays d'interventions de l'ONG EICF
                        </h2>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem Le Lorem Ipsum est simplement du faux texte employé dans .Le Lorem Ipsum est simplement du faux texte employé dans .
                        </p>
                        
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            <div className="">
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <h2 className="h2 fw-bolder">
                            Pays d'interventions de l'ONG EICF
                        </h2>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem Le Lorem Ipsum est simplement du 
                        </p>
                    </div>
                </div>
                <div className=" row justify-content-between align-items-center">
                    <div className="">
                        <h2 className="h2 fw-bolder">
                            Continent
                        </h2>
                        <div className="divider"></div>

                    </div>
                    <div className="">
                        <h2 className="h2 fw-bolder">
                            Continent
                        </h2>
                        <div className="divider"></div>

                    </div>
                    <div className="">
                        <h2 className="h2 fw-bolder">
                            Continent
                        </h2>
                        <div className="divider"></div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DetailsProjects