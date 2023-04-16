

import { useRef } from 'react';
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import AppHeader from "components/AppHeader"
import InterventionsContries from "components/InterventionsContries"
import OurMissionCard from 'components/OurMissionCard';

import "assets/styles/DetailsProjects.css"



const InterventionsContriesMap = ()=>{
    const latlng=[7.5468545,-5.547099500000002]
    const mapRef = useRef()
    return(
        <div className="interventions-contries-map">
            <MapContainer 
                className="interventions-contries-map-container"
                center={latlng} 
                zoom={13} 
                ref={mapRef}
                scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latlng}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}


const TeamCard=({personName,personInfo})=>{

    return(
        <div className="team-card">  
           
            <div className="team-card-img-content row justify-content-center align-items-center">
                <div className="team-card-img-content-2 col">
                    <img className="img-fluid" src="https://bit.ly/sage-adebayo" alt="slide-img" />
                </div>
            </div>
            <div className="team-card-content">
                <h3> {personName} </h3>
                <p>{personInfo} </p>
            </div>
        </div>
    )
}


const DetailsProjects =()=>{
    const image = 'https://placeimg.com/640/480/tech'

    return(
        <>
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
            <div className="mt-5 p-md-5 ">
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
                <div className="interventions-contries-section align-items-center">
                    <InterventionsContries continent="Afrique" />
                    <InterventionsContries continent="Amérique" />
                    <InterventionsContries continent="Asie" />
                    <InterventionsContries continent="Afrique" />
                    <InterventionsContries continent="Amérique" />
                    <InterventionsContries continent="Asie" />
                </div>
                <div className="interventions-contries-map-section">
                    <InterventionsContriesMap />
                </div>
            </div>

            <div className="our-mission-container">
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <h2 className="mb-4">
                            Nos experts climats font bouger les politiques
                        </h2>
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

            <div className="our-teams-section">
                <h2 className="mb-4 text-uppercase text-center fw-bolder">
                    Notre équipe à votre écoute
                </h2>
                <div className="our-teams-container container">
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                    <TeamCard 
                        personName="Lorem Ipsum"
                        personInfo=" Le Lorem Ipsum est simplement du faux texte employé " />
                </div>
            </div>

            <div className="join-us-section">
                <h2 className="mb-4 text-uppercase text-center fw-bolder">
                    Réjoignez-nous
                </h2>
                <div className="join-us-missions-container">
                    <OurMissionCard 
                        imageSrc={image}
                    />
                    <OurMissionCard 
                        imageSrc={image}
                    />
                    <OurMissionCard 
                        imageSrc={image}
                    />
                    <OurMissionCard 
                        imageSrc={image}
                    />
                    <OurMissionCard 
                        imageSrc={image}
                    />
                    <OurMissionCard
                        imageSrc={image}
                    />
                </div>
            </div>
            
        </>
    )
}

export default DetailsProjects