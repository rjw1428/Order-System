import React, { Component } from 'react'
import Auxil from '../../hoc/Auxil'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

let links=[
    {url: '/', active: true, label: "Burger Builder"}, 
    {url: '/', active: false, label: "Checkout"}
]
class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler=() =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler=() => {
        this.setState((prevState)=>({showSideDrawer: !prevState.showSideDrawer}))
    }
    
    render () {
        return (
            <Auxil>
                <Toolbar links={links} toggleSideBar={this.sideDrawerToggleHandler}/>
                <SideDrawer links={links} closeSideDrawer={this.sideDrawerCloseHandler} isOpen={this.state.showSideDrawer}/>
                <main 
                    className={classes.Content}
                    >{this.props.children}
                </main>
            </Auxil>
        )
    }
}

export default Layout