import Layout from 'components/Layout';
import AppButton from 'components/AppButton';
import logo from "assets/images/logo_ong_eicf.png"
import 'assets/styles/Home.css';




const CardAction =  ()=>{

    return(
        <div className="card-action">
            <div className="card-action-image-container">
                <img src={logo} alt="ONG EICF" className="img-fluid mx-auto w-100" style={{height:'15rem'}} />
            </div>
            <div className="card-action-body">
            </div>
        </div>
    )
}

const Home = ()=> {
  return (
    <Layout>
      <div className="header">
        <div className="row">
            <div className="col-md-6">
                <h1 className="fw-bolder text-white " >
                    Ensemble luttons contre les inégalités
                </h1>
                <p className="mt-2">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                </p>
                <AppButton title="Nous connaitre" />
            </div>
        </div>
      </div>
      <div className="row justify-content-end header-card-main ">
        <div className="col-md-5  hearder-card">
            <h2> Depuis 16 ans notre action compte</h2>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        100 millions
                    </p>
                    <p>
                        personnes aidées en 2022
                    </p>
                </div>
                <div className="col-md-6">
                    <p>
                        100 
                    </p>    
                    <p>
                        pays d'interventions
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="card-sections">
        <div className="row jusitfy-content-between align-items-center ">
            <div className="col-md-4">
                <CardAction />
            </div>
            <div className="col-md-4">
                <CardAction />
            </div>
            <div className="col-md-4">
                <CardAction />
            </div>
        </div>

      </div>
    </Layout>
  );
}

export default Home;
