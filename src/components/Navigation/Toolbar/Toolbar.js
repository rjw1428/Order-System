import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Items/NavItems'
import ToggleButton from '../ToggleButton/ToggleButton'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleButton clicked={props.toggleSideBar}></ToggleButton>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems links={props.links}></NavigationItems>
        </nav>
    </header>
);

export default toolbar