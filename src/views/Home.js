

import AppButton from 'components/AppButton';
import CardAction from 'components/CardAction';
import cardImg  from 'assets/images/card_img.jpeg';
import cardImg2  from 'assets/images/cardImg2.jpg';
import cardImg3  from 'assets/images/card_img3.jpeg';
import OurFightCard from "components/OurFightCard";
import MySlider from 'components/MySlider';
import AppHeader from 'components/AppHeader';
import 'assets/styles/Home.css';
import { Form } from 'react-bootstrap';



const slides = [
    { 
        firstContent: "Nous tenons à exprimer notre profonde gratitude pour votre soutien indéfectible et votre engagement envers notre cause. Votre partenariat et votre dévouement sont des piliers essentiels de notre travail pour améliorer la vie des personnes dans le besoin. Grâce à votre générosité et votre collaboration, nous pouvons continuer à faire une réelle différence dans la lutte contre la pauvreté et l'injustice sociale. Nous vous sommes infiniment reconnaissants de faire partie de cette communauté solidaire et nous sommes impatients de poursuivre notre travail ensemble.", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://images.pexels.com/photos/3225487/pexels-photo-3225487.jpeg'
    },
    { 
        firstContent: "Nous souhaitons vous adresser nos sincères remerciements pour votre précieux soutien et votre engagement inébranlable envers notre mission. Votre dévouement et vos efforts inlassables contribuent à créer un monde meilleur pour ceux qui en ont le plus besoin. Votre passion et votre solidarité nous inspirent chaque jour à redoubler d'efforts et à trouver des solutions innovantes pour relever les défis complexes auxquels nous sommes confrontés. Ensemble, nous faisons une réelle différence et nous vous sommes profondément reconnaissants d'être une force motrice dans cette lutte contre l'injustice et la pauvreté.  Avec une gratitude infinie,", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg' 
    },
    { 
        firstContent: "Nous tenons à exprimer notre immense gratitude pour votre soutien continu et votre engagement inébranlable envers notre cause. Votre générosité et votre solidarité font une réelle différence dans la vie de nombreuses personnes vulnérables et marginalisées. Votre collaboration précieuse renforce notre capacité à offrir des programmes et des services essentiels, à promouvoir l'égalité des chances et à créer des changements durables. Nous sommes extrêmement reconnaissants de votre confiance en notre travail et de votre engagement à nos côtés. Ensemble, nous continuons à bâtir un avenir meilleur pour tous.Avec tout notre respect et notre gratitude,", 
        secondContent: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg' 
    },
  ];



const actions = [
    {
        date: "18 mai 2023",
        ville: "Abidjan",
        img:`https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg`,
        contenu: "Aujourd'hui, un rapport a été publié sur la situation de la pauvreté à Abidjan. Il met en évidence les défis auxquels sont confrontés les habitants les plus démunis de la ville et propose des solutions pour améliorer leur condition de vie."
    },
    {
        date: "30 avril 2023",
        ville: "Bouaké",
        img:`https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg`,
        contenu: "La pauvreté reste un problème préoccupant à Bouaké. Des initiatives sont en cours pour renforcer l'accès à l'éducation, à la santé et aux opportunités d'emploi dans la région, afin de réduire les inégalités sociales et économiques."
    },
    {
        date: "12 mars 2023",
        ville: "Yamoussoukro",
        img:`https://images.pexels.com/photos/3225487/pexels-photo-3225487.jpeg`,
        contenu: "Un programme gouvernemental ambitieux a été lancé à Yamoussoukro pour combattre la pauvreté. Il vise à améliorer les infrastructures, à promouvoir l'entreprenariat local et à renforcer les filets de sécurité sociale pour les populations les plus vulnérables."
      }
      
     
]




const slidesHeader = [
    { 
        title: "Unissons nos forces pour combattre l'inégalité.", 
        content: " Unissons nos efforts pour éliminer la faim. En travaillant main dans la main, nous pouvons mettre fin à cette injustice en assurant un accès équitable à une alimentation adéquate et en soutenant des initiatives durables de sécurité alimentaire", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg',
        showButton:true
    },
    { 
        title: "Combattons ensemble la pauvreté et l'exclusion sociale.",
        content: " Ensemble, combattons l'inégalité en unissant nos forces. En travaillant main dans la main, nous pouvons créer un monde plus juste et équitable pour tous, où chaque individu a les mêmes opportunités et droits fondamentaux.  ", 
        image: 'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg' ,
        showButton:true
    },
    { 
        title: "Travaillons main dans la main pour éradiquer la faim.",
        content: "Unissons nos forces pour lutter contre la pauvreté et l'exclusion sociale. En travaillant ensemble, nous pouvons créer des opportunités, promouvoir l'inclusion et construire une société où chaque individu peut accéder à une vie digne et épanouissante.", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg' ,
        showButton:true
    },
  ];

  

const slidesHeader2 = [
    { 
        title:"Agir avec EICF Rejoignez une communauté engagée de 100 000 personnes en Côte D'ivoire",  
        content: "Nous t'invitons chaleureusement à rejoindre notre communauté d'ONG dédiée à faire une réelle différence dans le monde. En tant que membre de notre communauté,Nous sommes convaincus que ton expertise, tes compétences et ta passion apporteront une contribution précieuse à nos efforts communs pour lutter contre la pauvreté, les inégalités et les injustices. ", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg',
        showButton:true,
        commentor:"Suini Fatou"
    },
    { 
        title: "Agir avec EICF Rejoignez une communauté engagée de 100 000 personnes en Côte D'ivoire", 
        content: "Nous t'invitons avec enthousiasme à rejoindre notre communauté d'ONG qui partage une vision commune de justice sociale et de lutte contre la pauvreté. En devenant membre de notre communauté, tu auras l'occasion de faire partie d'un réseau dynamique de personnes engagées qui travaillent ensemble pour créer un impact positif dans notre société.", 
        image: 'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg' ,
        showButton:true,
        commentor:"Suini Fatou"
    },
    { 
        title: "Agir avec EICF Rejoignez une communauté engagée de 100 000 personnes en Côte D'ivoire", 
        content: "Nous t'invitons cordialement à rejoindre notre communauté d'ONG, un espace où les idées prennent vie et où les actions concrètes transforment des vies. En intégrant notre communauté, tu seras entouré(e) de personnes partageant les mêmes convictions et aspirations, travaillant ensemble pour apporter des changements positifs dans notre société.", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg' ,
        showButton:true,
        commentor:"Suini Fatou"
    },
  ];

  

  const ourFights = [
        {
            title:"luttons contre le changement climatique",
            img: cardImg

        },
        {
            title:"Nourrir les enfants affamés",
            img: cardImg2

        },
        {
            title:"Nourrir les enfants affamés",
            img: cardImg3

        }
    ]

  

const Home = ()=> {

  return (
    <>
        <div className=''>
            <AppHeader  slidesheader={slidesHeader} showButton={true}/>
        <div className="row justify-content-center header-card-main mb-5 py-5 ">
            <div className="col-md-9 container text-center hearder-card">
                <h2 className="text-uppercase " > Depuis  <span className='fw-bolder' > 16 ans</span> notre action compte</h2>
                <div className="row shadow rounded bg-white justify-content-between">
                    <div className="col-md-6 shadow bg-wite py-md-5 my-md-0 my-3">
                        <p className='text-uppercase' > 100 millions </p>
                        <p> personnes aidées en 2022  </p>
                    </div>
                    <div className="col-md-6 shadow  py-md-5  my-md-0 my-3">
                        <p className='text-uppercase' >100  </p>    
                        <p> pays d'interventions </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div 
        className="home-card-actions container" 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
         >
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-9 home-card-actions-h ">
                <h1 className="fw-bolder">
                    En direct du terrain
                </h1>
                <p className="mt-2">
                    Pour combattre la pauvreté de manière efficace et durable, il est essentiel de s'attaquer aux racines des inégalités et de placer les femmes au centre de nos efforts. Voici trois domaines sur lesquels nous nous concentrons.
                </p>
            </div>
        </div>
        </div>
      <div className="home-card-actions">
      <div className="card-sections container">
        
        <div 
            className="d-flex flex-wrap jusitfy-content-between align-items-center " 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom" > 

            {
                actions?.map(({ville,date,img,contenu},index)=>(
                    <CardAction 
                            key={index}
                           ville={ville}
                           date={date}
                           img={img}
                           contenu={contenu}
                        />))
            }



        </div>
        <div 
            className="row jusitfy-content-evenly align-items-center text-center mt-3 mt-md-5" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="col-md-6 ">
                <AppButton title="Toutes les actualités" />
            </div>
            <div className="col-md-6">
                <AppButton title="Actu des réseaux" />
            </div>

        </div>
      </div>
      </div>

      <div className="our-fights-section container">
        <div 
            className="row justify-content-center align-items-center text-center" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom">
            <div className="col-md-9 header-fight">
                <h1 className="fw-bolder">
                    Nos combats contre la pauvrété
                </h1>
                <p className="mt-2">
                Notre approche pour combattre efficacement et durablement la pauvreté repose sur deux éléments essentiels : la prise en compte des causes profondes des inégalités et l'engagement central envers les femmes. Voici trois domaines spécifiques sur lesquels nous nous concentrons.
                </p>
            </div>
        </div>
        <div 
            className="d-flex flex-wrap jusitfy-content-between align-items-center mt-md-4" 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom">
                {
                    ourFights?.map(({title,img},index)=>(
                        <OurFightCard 
                            key={index}
                            title={title}   
                            imageSrc={img} />

                    ))
                }
              
            
        </div>
        <div 
            className="text-center mx-auto mt-3 mt-md-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom">
            <AppButton title="Découvrir tous les combats" />
        </div>
      </div>

      <div 
        className="join-us-section"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom">
        <AppHeader 
            slidesheader={slidesHeader2} 
            showButton={false}
            />
        <div className=" join-us-actions gap-2 d-flex justify-content-around align-items-center container">
            <div className="text-center">
                <h3>Nous rejoindre</h3>
                <div className="d-flex">
                    
                    <Form.Control
                        className='rounded-pill'
                        style={{ }}
                        placeholder="Votre email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
        />
                    <AppButton title="JE M'ABONNE A LA NEWSLETTER" />
                </div>
            </div>
            <div className="text-center"  >
                <h3>Agir ensemble</h3>
                <div className="d-flex mt-2">
                    <AppButton title="JE SOUTIENS UNE COMPAGNIE" />
                    <AppButton title="JE FAIS UN DON" />
                </div>
            </div>
        </div>
      </div>

      <div 
        className="victoire-container mt-5 pt-1 pb-5 mb-5 " 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom">
        <div className='container'>
            <div className="row victoire-container-header justify-content-center align-items-center text-center">
                <div className="col-md-9">
                    <h1 className="fw-bolder">
                        Nos victoires en témoignages !
                    </h1>
                    <p className="mt-2">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la 
                    </p>
                </div>
            </div>
        </div>
        <div className="row my-slide-row shadow">
            <MySlider slides={slides} />
        </div>

      </div>
    </>
  );
}

export default Home;
