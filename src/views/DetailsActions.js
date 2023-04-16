import "assets/styles/DetailsActions.css"
import ActivityHeader from "components/ActivityHeader"
import { useState } from "react"

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
            <div className="details-actions-header">
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-md-10">
                        <h1>
                            Le Lorem Ipsum est simplement du faux texte 
                        </h1>
                        <div className="details-actions-text">
                            <p> 
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur   anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            </p>
                            <p> 
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            </p> 
                            <p> 
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="our-mission-container">
                <h2>
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
            
            <div className="other-mission-container">
                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-10 mt-md-0 mt-3 text-center">
                        <h2>
                            EICF, un réseau humanitaire mondial
                        </h2>
                        <p> 
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

            <div className="other-mission-indicator ">
                <div className="row justify-content-center align-items-center">
                    <div className="col">
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem 
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5">  
                <ActivityHeader
                    title="L'ONG EICF en chiffre"
                    content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que "
                />
            </div>
        </>
    )
}

export default DetailsActions