

import AppButton from 'components/AppButton';
import CardAction from 'components/CardAction';
import cardImg  from 'assets/images/card_img.jpeg';
import cardImg2  from 'assets/images/cardImg2.jpg';
import cardImg3  from 'assets/images/card_img3.jpeg';
import OurFightCard from "components/OurFightCard";
import MySlider from 'components/MySlider';
import AppHeader from 'components/AppHeader';
import 'assets/styles/Home.css';



const slides = [
    { 
        firstContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://placeimg.com/640/480/tech'
    },
    { 
        firstContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://placeimg.com/640/480/people' 
    },
    { 
        firstContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texteimprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://placeimg.com/640/480/animals' 
    },
  ];



const actions = [
    { 
        title:"lorem ipsum ",
        img:`https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg`,
        text:" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
     },
     { 
         title:"lorem ipsum ",
         img:`https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg`,
         text:" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
      },
      { 
          title:"lorem ipsum ",
          img:`https://images.pexels.com/photos/3225487/pexels-photo-3225487.jpeg`,
          text:" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
       },
]



const Home = ()=> {

  return (
    <>
        <div className=''>
            <AppHeader
                title="Ensemble luttons contre les inégalités"
                content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que "
            />
        <div className="row justify-content-center header-card-main mb-5 py-5 ">
            <div className="col-md-9 container text-center hearder-card">
                <h2 className="fw-bolder text-uppercase " > Depuis 16 ans notre action compte</h2>
                <div className="row shadow rounded bg-white justify-content-between">
                    <div className="col-md-6 shadow bg-wite py-md-5 my-md-0 my-3">
                        <p> 100 millions </p>
                        <p> personnes aidées en 2022  </p>
                    </div>
                    <div className="col-md-6 shadow  py-md-5  my-md-0 my-3">
                        <p>100  </p>    
                        <p> pays d'interventions </p>
                    </div>
                </div>
            </div>
        </div>
      </div>


      <div className="home-card-actions">
      <div className="card-sections container">
        <div className="d-flex flex-wrap jusitfy-content-between align-items-center ">

            {
                actions?.map(({title,img,text},index)=>(
                    <CardAction 
                            key={index}
                           title={title}
                           img={img}
                           text={text}
                        />))
            }



        </div>
        <div className="row jusitfy-content-evenly align-items-center text-center mt-3 mt-md-5">
            <div className="col-md-6 ">
                <AppButton title="Toutes les actualiés" />
            </div>
            <div className="col-md-6">
                <AppButton title="Actu des réseaux" />
            </div>

        </div>
      </div>
      </div>

      <div className="our-fights-section container">
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
        <div className="d-flex flex-wrap jusitfy-content-between align-items-center">
                <OurFightCard title="luttons contre le changement climatique"  imageSrc={cardImg} />
                <OurFightCard title="Nourrir les enfants affamés" imageSrc={cardImg3}  />
                <OurFightCard title="Défense des droits des femmes"  imageSrc={cardImg2} />
            
        </div>
        <div className="text-center mx-auto mt-3 mt-md-5">
            <AppButton title="Découvrir tous les combats" />
        </div>
      </div>

      <div className="join-us-section">
        <div className="join-us-content container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="fw-bolder text-white " >
                        Agir avec EICF
                    </h2>
                    <h3 className="mt-3 fw-bolder">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.texte
                    </h3>
                    <p className="fw-bolder mt-5">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                    </p>
                </div>
            </div>
        </div>
        <div className=" join-us-actions gap-2 d-flex justify-content-around align-items-center container">
            <div className="text-center ">
                <h3>Nous rejoindre</h3>
                <div className="d-flex">
                    <AppButton title="" />
                    <AppButton title="JE M'ABONNE A NEWSLETTERS" />
                </div>
            </div>
            <div className="text-center "  >
                <h3>Agir ensemble</h3>
                <div className="d-flex mt-2">
                    <AppButton title="JE SOUTIENS UNE COMPAGNIE" />
                    <AppButton title="JE FAIS UN DON" />
                </div>
            </div>
        </div>
      </div>

      <div className="mt-5 pt-5 pb-5 mb-5 container">
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-9">
                <h1 className="fw-bolder">
                    Nos victoires en témoignages !
                </h1>
                <p className="mt-2">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la 
                </p>
            </div>
        </div>
        <div className="row">
            <MySlider slides={slides} />
        </div>
      </div>
    </>
  );
}

export default Home;
