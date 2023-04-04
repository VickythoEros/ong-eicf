import Layout from 'components/Layout';
import AppButton from 'components/AppButton';
import 'assets/styles/Home.css';
import CardAction from 'components/CardAction';
import cardImg  from 'assets/images/card_img.jpeg';




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
            <div className="col-md-4"  >
                <CardAction />
            </div>
        </div>
        <div className="row jusitfy-content-evenly align-items-center text-center mt-3 mt-md-5">
            <div className="col-md-8 ">
                <AppButton title="Toutes les actualiés" />
            </div>
            <div className="col-md-4">
                <AppButton title="Actu des réseaux" />
            </div>

        </div>
      </div>
      
      <div className="our-fights-section mt-3 mt-md-5">
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-9">
                <h1 className="fw-bolder">
                    nos combats contre la pauvrété
                </h1>
                <p className="mt-2">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur 
                </p>
            </div>
        </div>
        <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
                <div 
                    className="our-fights-card"
                    style={{
                        backgroundImage:`linear-gradient(to bottom, rgba(146, 139, 139, 0.452), rgba(0, 0, 0, 0.904)),url(${cardImg})`
                    }}
                 >
                    <h2>
                        luttons contre le rechauffement climatique
                    </h2>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
