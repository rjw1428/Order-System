import React from 'react'
import classes from './NavItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavItems}>  
        {props.links.map((link,i)=><li key={i}><a href={link.url} className={link.active ? classes.active:null}>{link.label}</a></li>)} 
    </ul>
);



export default navigationItems


