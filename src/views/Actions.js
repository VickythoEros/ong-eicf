import ActivityHeader from "components/ActivityHeader"
import AppHeader from "components/AppHeader"
import CardAction from "components/CardAction"
import "assets/styles/Actions.css"


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
    },
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
    },
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


const Actions = ()=>{

    return(
        <>
            <div className="">
                <AppHeader 
                    slidesheader={slidesHeader2} 
                    showButton={false}
                    action={true}
            />

            </div>
           
            <div className="container mt-md-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
            >

                <div className="text-center activity-header-title">
                    <h1  >
                        L' <span className="text-uppercase" > ong eicf </span> en chiffre
                    </h1>
                    <p>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprim
                    </p>
                </div>  
                <ActivityHeader  activiies={activiies} />
            </div>
            <div 
                className="actions-list-container container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                >
                <div className="text-center">
                    <h1>Nos Actions</h1>
                    <p>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprim
                    </p>
                </div>  

                <div className="d-flex flex-wrap jusitfy-content-between align-items-center actions-lists">
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
            </div>

        </>
    )
}

export default Actions