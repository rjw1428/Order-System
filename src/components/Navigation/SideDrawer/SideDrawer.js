import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../Items/NavItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxil from '../../../hoc/Auxil'
const sideDrawer = (props) => {
    console.log(props.isOpen)
    return (
        <Auxil>
             <Backdrop 
                show={props.isOpen} 
                clicked={props.closeSideDrawer}
            />
            <div className={[classes.SideDrawer, props.isOpen?classes.Open:classes.Close].join(" ")}>
                <div>MENU</div>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems links={props.links}/>
                </nav>
            </div>
        </Auxil>

    );
}

export default sideDrawer;