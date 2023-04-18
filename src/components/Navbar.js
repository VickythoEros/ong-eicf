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
import AppButton from './AppButton';
import logo from "assets/images/logo_ong_eicf.png"

import 'assets/styles/Navbar.css';

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <nav className="container app-nav" >
            <div className="navbar row-md">
                <div className="col-md-2 nav-logo">
                        <NavLink className="nav-logo-container " to="/" >
                            <Image  
                                src={logo} 
                                className="ong-eicf-logo" 
                                alt='logo ONG EICF' />
                        </NavLink>    
                </div>
                <div className="col-md-10 d-none d-md-block">
                    <div className="row nav-header-row">
                        <ul className="nav-header-ul" >
                            <li >friday</li>
                            <li >monday</li>
                            <li >monday</li>
                            <li >monday</li>
                        </ul>
                    </div>
                    <div className="navbar-divider"></div>
                    <div className="d-flex justify-content-between align-items-center nav-button-container">
                        <div className="d-flex nav-button-menu">
                            <Menu>
                                <MenuButton  as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>
                                    QUI SOMMES NOUS 
                                </MenuButton>
                                <MenuList>
                                    <MenuItem 
                                        as={NavLink} 
                                        to='/who-us'>
                                        Qui sommes nous ?
                                    </MenuItem>
                                    <MenuItem>nous</MenuItem>
                                    <MenuItem>nous</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>
                                    NOS ACTIONS
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as={Link} to='/actions'>
                                        Actions
                                    </MenuItem>
                                    <MenuItem>Action 2</MenuItem>
                                    <MenuItem>Action 2</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button}variant='ghost'  rightIcon={<ChevronDownIcon />}>
                                    NOS PROJETS
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as={Link} to='/projects'>
                                        Projets
                                    </MenuItem>
                                    <MenuItem>Projets</MenuItem>
                                    <MenuItem>Projets</MenuItem>
                                </MenuList>
                            </Menu>
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