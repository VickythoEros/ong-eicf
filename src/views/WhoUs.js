import Layout from "components/Layout"
import "assets/styles/WhoUs.css"
import { List,  ListItem,  ListIcon,IconButton } from '@chakra-ui/react'
import { FaRegStar } from 'react-icons/fa';
import { BsFacebook,BsGoogle } from 'react-icons/bs';
import OurMissionCard from "components/OurMissionCard";


const WhoUs = ()=>{
    const image = 'https://placeimg.com/640/480/tech'

    return(
        <Layout>
            <div className="who-us-header">
                <div className="pt-5">
                    <div className="who-us-header-content row justify-content-between align-items-center align-items-center">
                        <div className="col-md-3 my-3 shadow py-md-5 ">
                            <List spacing={3} className="interventions-contries-list">
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Lorem consectetur adipisicing elit
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Assumenda, quia 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam illum quis 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam 
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaRegStar} color='orange.500' />
                                    Quidem, ipsam 
                                </ListItem>
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
            </div>
        </Layout>
    )
}

export default WhoUs