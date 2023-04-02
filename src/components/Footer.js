
import logo from "assets/images/logo_ong_eicf.png"
import DonateButton from "./DonateButton"
import "assets/styles/Footer.css"


export default function Footer(){

    return(
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                            <div className="d-flex  align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={logo} alt="ONG EICF" className="img-fluid mx-auto" style={{width:"8rem"}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 my-3">
                                    <h6 className="text-uppercase fw-bolder text-center mt-3" >
                                        ensemble contre les inégalités
                                    </h6>
                                    <p>
                                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                                    </p>
                                    <div className="text-center mt-3">
                                        <DonateButton  />
                                    </div>
                                </div>
                                <div className="col-md-4 my-3 contacts">
                                    <h6 className="text-uppercase fw-bolder text-center mt-3" >
                                       contacts
                                    </h6>
                                    <div className="text-center mt-3 ">
                                        <p>
                                            27 BP Cocody ABIDJAN 27
                                        </p>
                                        <p className="mt-5">
                                            <span>Phone : </span> 00225 22650124
                                        </p>
                                        <p>
                                            <span>Email : </span> 00225 22650124
                                        </p>
                                        <p>
                                            <span>Web : </span> 00225 22650124
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className="col-md-4 my-3 links">
                                    <h6 className="text-uppercase fw-bolder text-center mt-3" >
                                        Liens utiles
                                    </h6>
                                    <div className="text-center mt-3 who-us">
                                        <p className='text-center'>
                                            Qui sommes nous ?
                                        </p>
                                        <ul className="">
                                            <li>Nos actions</li>
                                            <li >Nos projets</li>
                                            <li >Faire un don</li>
                                            <li >Offres</li>
                                            <li > Contacts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-4 informations mt-3">
                        <h2 className="fw-bolder" >
                            S'informer, <br/> c'est déjà s'engager
                        </h2>
                        <div className="mt-5">
                            <label className="fw-bolder" >Je m'abonne à EICF </label>
                            <div className="inputs mt-2">
                                <input className="" placeholder="Votre adresse Email" />
                                <button  className="w-100 " >envoyer</button>
                            </div>
                        </div>

                    </div>
                 
                </div>
            </div>
        </footer>
    )
}