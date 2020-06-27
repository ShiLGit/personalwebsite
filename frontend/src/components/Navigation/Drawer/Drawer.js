import React from 'react';

import DrawerOptions from './DrawerElements/DrawerOptions';
import Hamburger from './DrawerElements/Hamburger';
const Drawer = (props)=>{
    return(
        <div style ={{backgroundColor:'red'}}>       
            <Hamburger clickHandler={props.toggleDrawer} active ={props.drawerOpen}/>
            <DrawerOptions drawerOpen={props.drawerOpen} onClickHandler={props.onClickHandler}/>
        </div>
    )
}

export default Drawer;