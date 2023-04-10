
import { List,  ListItem,  ListIcon } from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa';


const InterventionsContries =({continent})=>{
    return(
        <div className="interventions-contries-container">
            <h2 className="h2 fw-bolder">
                {continent}
            </h2>
            <div className="divider"></div>
            <div className="interventions-contries-content">
                <List spacing={3} className="interventions-contries-list">
                    <ListItem>
                        <ListIcon as={FaMapMarkerAlt} color='orange.500' />
                        Lorem consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaMapMarkerAlt} color='orange.500' />
                        Assumenda, quia 
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaMapMarkerAlt} color='orange.500' />
                        Quidem, ipsam illum quis 
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        <ListIcon as={FaMapMarkerAlt} color='orange.500' />
                        Quidem, ipsam 
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default InterventionsContries