
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import logo from "assets/images/logo_ong_eicf.png"

import styles from 'assets/styles/Navbar.module.css';
import AppButton from './AppButton';
import { Link } from 'react-router-dom';

export default function Navbar(){

    return(
        <nav className="container" >
            <div className="navbar row">
                <div className="col-3">
                    <div className="rounded">
                        <img src={logo} alt="ONG EICF" />
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <ul className={styles.ul} >
                            <li className={styles.li} >friday</li>
                            <li className={styles.li}>monday</li>
                            <li className={styles.li}>monday</li>
                            <li className={styles.li}>monday</li>
                        </ul>
                    </div>
                    <div className={styles.navbar_divider}></div>
                    <div className="d-flex justify-content-between align-items-center pt-3">
                        <div className="d-flex ">
                            <Menu>
                                <MenuButton  as={Button} variant='ghost' rightIcon={<ChevronDownIcon />}>
                                    QUI SOMMES NOUS 
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>nous</MenuItem>
                                    <MenuItem>nous</MenuItem>
                                    <MenuItem>nous</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton as={Button} variant='ghost'  rightIcon={<ChevronDownIcon />}>
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
                        <div className="d-flex justify-content-between align-items-center gap-2">
                            <AppButton title="NOUS CONTACTER" />
                            <AppButton title="JE FAIS UN DON" />
                        </div>
                    </div>
                </div>
            </div>
           
        </nav>
    )
}