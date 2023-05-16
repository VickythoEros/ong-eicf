import { useRef } from 'react';

import { List,  ListItem,  ListIcon,IconButton, Tabs, TabList, Tab } from '@chakra-ui/react'
import { FaRegStar } from 'react-icons/fa';
import { BsFacebook,BsGoogle } from 'react-icons/bs';
import OurMissionCard from "components/OurMissionCard";
import MySlider from "components/MySlider";
import AppButton from "components/AppButton";

import "assets/styles/WhoUs.css"


export const listsOptionsWhous = [
    {
        title:"Qui sommes nous ",
        id:1
    },
    {
        title:"Mission de l'ONG EICF ",
        id:2
    },
    {
        title:"Objectifs spécifiques ",
        id:3
    },
    {
        title:"Objsctifs assignés ",
        id:4
    },
    {
        title:"Valeurs de l'ONG EICF ",
        id:5
    },
  ]

const WhoUs = ()=>{
    const componentRefs = useRef([]);
    const image = 'https://placeimg.com/640/480/tech'

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




    const handleItemClicked = (index) => {
        // Faire défiler vers le composant référencé
        if (componentRefs.current[index]) {
        componentRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };


    return(
        <>
            <div className="who-us-header">
                <div className="pt-5">
                    <div className="who-us-header-content row justify-content-between align-items-center align-items-center">
                        <div className="col-md-3 my-3 shadow py-md-5 ">
                            <List spacing={3} className="interventions-contries-list">
                                {
                                    listsOptionsWhous?.map(({title,id})=>
                                    (
                                        <ListItem className='who-us-items' key={id} onClick={()=>handleItemClicked(id)}>
                                            <ListIcon as={FaRegStar} color='orange.500' />
                                            {title}
                                        </ListItem>
                                    ))
                                }
                               
                            </List>
                        </div>
                        <div className="col-md-9 my-3">
                            <div className="row justify-content-between">
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image} linkText="Nos missons" />
                                </div>
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image} linkText="Notre objectifs" />
                                </div>
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image}linkText="Nos valeurs" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="who-us-share-container d-flex justify-content-end align-items-center">
                        <p className="mt-3 me-3" >Partager </p>
                        <IconButton className="mx-2" rounded="2xl"  aria-label='facebook' icon={<BsFacebook />} />
                        <IconButton  className="mx-2" rounded="2xl" aria-label='google' icon={<BsGoogle />} />
                       
                    </div>
                </div>
                <div className=''>
                    <Tabs>
                    <TabList>
                        {
                            listsOptionsWhous?.map(({title,id})=>(

                                <Tab onClick={()=>handleItemClicked(id)}
                                    key={id}
                                    _selected={{ color: 'var(--color-primary-yellow)', bg: 'white' }}
                                     >
                                    {title}
                                </Tab>
                            ))
                        }
                    </TabList>

                    </Tabs>
                </div>
            </div>
            <div 
                ref={(el) => (componentRefs.current[1] = el)} 
                className="who-us-content mt-5">
                <h1 className="fw-bolder text-center" >
                    Qui sommes nous ?
                </h1>
                <div className="row justify-content-between align-items-center py-4">
                    <div className="col-md-6 py-3">
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla 
                            <span className="span-colored">composition et la mise en page avant impression.</span>ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.<br />
                             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen <span className="span-colored">composition et la mise en page avant impression.</span>
                        </p>
                    </div>
                    <div className="col-md-6 py-2">
                        <div className="divider"></div>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, t la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, <span className="span-colored">composition et la mise en page avant impression.</span> réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, t la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, <span className="span-colored">composition et la mise en page avant impression.</span> réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>
                        <div className="divider"></div>
                    </div>
                </div>

                <div className="row justify-content-between align-items-center pt-3">
                    <div className="col">
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de <span className="span-colored">composition et la mise en page avant impression.</span> quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>
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
            </div>
            
            <div 
                ref={(el) => (componentRefs.current[2] = el)} 
                className="mt-5 pt-5 pb-5 mb-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-9">
                        <h1 className="fw-bolder">
                            Mission de l'ONG EICF
                        </h1>
                        <p className="my-4">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et laLe Lorem Ipsum est simplement du faux texte employé dans <span className="span-colored">composition et la mise en page avant impression.</span> laLe Lorem Ipsum est simplement du faux texte employé dans la composition et la 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <MySlider slides={slides} />
                </div>
            </div>

            <div 
                ref={(el) => (componentRefs.current[3] = el)} 
                className="specific-objectif">
                <h1 className="fw-bolder text-center pt-5 pt-4">
                    Objectifs specifiques
                </h1>
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-md-6 my-3 text-center">
                        <div className="slide-img-content">
                            <img className="img-fluid" src={image} alt="objectif img" />
                        </div>
                    </div>
                    <div className="col-md-6 my-3 ">
                        <h2 className="fw-bolder text-center">
                            Objectifs specifiques Objectifs specifiques Objectifs specifiques Objectifs specifiques
                        </h2>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de <span className="span-colored">composition et la mise en page avant impression.</span> quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>

                    </div>
                </div>
                <div 
                    ref={(el) => (componentRefs.current[4] = el)} 
                    className="row justify-content-between align-items-center">
                    <div className="col-md-6 my-3 ">
                        <h2 className="fw-bolder text-center">
                            Objectifs assignés
                        </h2>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de <span className="span-colored">composition et la mise en page avant impression.</span> quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        </p>

                    </div>
                    <div className="col-md-6 my-3 text-center">
                        <div className="slide-img-content">
                            <img className="img-fluid" src={image} alt="objectif img" />
                        </div>
                    </div>
                </div>

                <div className="specific-objectif-header">
                    <div className="row justify-content-center align-items-center mx-auto">
                        <div className="col-md-10">
                            <h1>
                                Le Lorem Ipsum est simplement du faux texte 
                            </h1>
                            <div className="specific-objectif-header-text">
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
            </div>
            <div 
                ref={(el) => (componentRefs.current[5] = el)}  
                className="our-worth">
                <div className="">
                    <h1 className="fw-bolder text-center pt-5 pt-4">
                        Valeurs de l'ONG EICF
                    </h1>
                    <p>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de <span className="span-colored">composition et la mise en page avant impression.</span> quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que 
                    </p>
                </div>

                <div className="our-worth-mission-indicator ">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-stretch">
                            <div className="our-worth-mission-indicator-style"></div>
                            <p className="our-worth-mission-indicator-text" >
                                Le Lorem Ipsum est simplement du faux texte employé dans .<span className="span-colored">composition et la mise en page avant impression.</span> Le Lorem 
                                Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem 
                                Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem 
                                Le Lorem Ipsum est simplement du faux texte employé dans 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="show-more">
                    <div className="text-center mb-md-5 mb-3">
                        <AppButton title="Accueil" />
                    </div>
                    <div className="show-more-content">
                        <h1 className="fw-bolder text-white text-center pt-5 pt-4">
                            En savoir plus surl'ONG EICF
                        </h1>

                        <div className="col my-3">
                            <div className="row justify-content-between">
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image} linkText="Nos missons" />
                                </div>
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image} linkText="Notre objectifs" />
                                </div>
                                <div className="col-md-4">
                                    <OurMissionCard imageSrc={image}linkText="Nos valeurs" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-stretch">
                            <button className="show-more-report-button" >
                                    voir tous nos rapports
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoUs