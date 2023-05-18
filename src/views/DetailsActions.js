import "assets/styles/DetailsActions.css"
import ActivityHeader from "components/ActivityHeader"
import AppHeader from "components/AppHeader"
import { useState } from "react"


const activiies = [
    {
        text: "d'existance",
        unit:"ans",
        number:16
    },
    {
        text: "de personnes soutenues en 2021",
        unit:"millions",
        number:100
    },
    {
        text: "dans 56 pays",
        unit:"projets",
        number:544
    },
]


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

  


const OtherMissionCard = ({title,text,image})=>{
    const [mouseHover,setMouseHover] = useState(false)

    const cardStyle= mouseHover ?`linear-gradient(to bottom,rgba(200, 200, 10, 0), var(--color-primary-yellow-3)),url(${image})` :
     `linear-gradient(to bottom,rgba(200, 200, 10, 0), rgba(200, 200, 200,0), rgba(0, 0, 0, 0.99)),url(${image})`
    return(
        <div 
            className="other-mission-card shadow"
            style={{backgroundImage:cardStyle}}
            onMouseEnter={()=>setMouseHover(true)}
            onMouseLeave={()=>setMouseHover(false)}
        >
            <div className="row justify-content-center align-items-end">
                <div className="col">
                    <h3 
                        className="fw-bolder"
                        style={{color: `${mouseHover ? "#000":"#fff"}`}} 
                    > 
                    {title} 
                    </h3>
                    <p
                        className="fw-bolder"
                        style={{color: `${mouseHover ? "#fff":"var(--color-primary-yellow-3)"}`}} 
                    >
                        {text} 
                    </p>
                </div>
            </div>
        </div>
    )
}


const DetailsActions = ()=>{
    const image = 'https://placeimg.com/640/480/tech'

    return(
        <>

                <AppHeader 
                    slidesheader={slidesHeader2} 
                    showButton={false}
                    action={true}
            />
         

            <div className="our-mission-container container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom">
                <h2 className="element-title-header" >
                    Mission de l'ONG EICF
                </h2>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, <span className="span-colored">quand un imprimeur anonyme</span> assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, <span className="span-colored">quand un imprimeur anonyme</span>
                        </p>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, <span className="span-colored">quand un imprimeur anonyme</span> assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>
                    </div>
                    <div className="col-md-6  mt-md-0 mt-3">
                        <div className="our-mission-container-img-content">
                            <img className="img-fluid" src={image} alt="slide-img" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="other-mission-container container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom">
                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-10 mt-md-0 mt-3 text-center">
                        <h2 className="element-title-header" >
                            EICF, un réseau humanitaire mondial
                        </h2>
                        <p className="element-title-paragraph"> 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem Ipsum est simplement du faux texte employé dans la
                        </p>
                    </div>
                </div>
                <div className="other-mission-card-container">
                    <div className="other-mission-card-content ">
                        <OtherMissionCard 
                            image={image}
                            title="mise en page avant impression"
                            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                        />
                        <OtherMissionCard 
                            image={image}
                            title="mise en page avant impression"
                            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                        />
                        <OtherMissionCard 
                            image={image}
                            title="mise en page avant impression"
                            text="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                        />
                    </div>
                </div>
            </div>

            <div className="other-mission-indicator container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <p className="element-title-paragraph" >
                            Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem 
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 container pt-5 pb-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom">  
                <div className="text-center ">
                    <h1 className="element-title-header"  >
                        L' <span className="text-uppercase" > ong eicf </span> en chiffre
                    </h1>
                    <p className="element-title-paragraph" >
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprim
                    </p>
                </div>  
                <ActivityHeader  activiies={activiies} />
            </div>
        </>
    )
}

export default DetailsActions