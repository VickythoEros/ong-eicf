import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    IconButton,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link, NavLink } from 'react-router-dom';
import { Image } from '@chakra-ui/react'
import { BsFillDatabaseFill } from "react-icons/bs";
import AppButton, { AppButtonRapport } from './AppButton';

import logo from "assets/images/logo_ong_eicf.png"

import 'assets/styles/Navbar.css';
import { listsOptionsWhous } from 'views/WhoUs';

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <nav className=" app-nav shadow py-2  bg-white ">
            <div className="navbar row-md container">
                <div className="col-md-2 nav-logo">
                        <NavLink className="nav-logo-container " to="/" >
                            <Image  
                                src={logo} 
                                className="ong-eicf-logo" 
                                alt='logo ONG EICF' />
                        </NavLink>    
                </div>
                <div className="col-md-10 d-none d-md-block">
                    <div className="d-flex justify-content-between  align-items-center py-2 nav-header-row">
                        <ul className="nav-header-ul" >
                            <li >Appel offre</li>
                            <li >emplois</li>
                        </ul>
                        <div className=''>
                            <AppButtonRapport icon={<BsFillDatabaseFill />} title="RAPPORTS ANNUELS" />
                        </div>
                    </div>
                    <div className="navbar-divider"></div>
                    <div className="d-flex justify-content-between align-items-center nav-button-container">
                        <div className="d-flex nav-button-menu">
                            <Menu  >
                                <MenuButton  as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>
                                    QUI SOMMES NOUS 
                                </MenuButton>
                                <MenuList>
                                    {
                                        listsOptionsWhous?.map(({title,id})=>(
                                            <MenuItem 
                                                key={id}
                                                as={NavLink} 
                                                to={`/who-us#${id}`}>
                                                {title}
                                            </MenuItem>
                                        ))
                                    }
                                </MenuList>
                            </Menu>
                            <Button className='text-uppercase' as={Link}variant='ghost'  to='/actions' >
                            Actions
                            </Button>
                            <Button className='text-uppercase' as={Link}variant='ghost'  to='/projects' >
                               
                                    Projets
                            </Button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-2 nav-other-button">
                            <AppButton title="NOUS CONTACTER" />
                            <AppButton title="JE FAIS UN DON" />
                        </div>
                    </div>
                     
                </div>
                <div className="d-flex justify-content-between align-items-center gap-2  nav-other-button-phone">   
                            <AppButton title="JE FAIS UN DON" />
                </div>

                <div className="nav-drawer-button-container">
                        <IconButton  onClick={onOpen}aria-label='open drawer' icon={<HamburgerIcon />} />
                    </div> 
            </div>
           <DrawerPhone 
           isOpenDrawer={isOpen}
           onCloseDrawer={onClose}
           />
        </nav>
    )
}



function DrawerPhone({ isOpenDrawer, onCloseDrawer }) {

  
    return (
      <>
        <Drawer 
            placement={'left'} 
            onClose={onCloseDrawer} 
            isOpen={isOpenDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                Basic Drawer

            <DrawerCloseButton  />
            </DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }