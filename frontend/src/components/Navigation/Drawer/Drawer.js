import React from 'react';

import DrawerOptions from './DrawerElements/DrawerOptions';
import Hamburger from './DrawerElements/Hamburger';

const Drawer = (props)=>{
    return(
        <div style ={{backgroundColor:'red'}}>       
            <Hamburger clickHandler={props.toggleDrawer}/>
            <DrawerOptions drawerOpen={props.drawerOpen}/>
        </div>
    )
}

export default Drawer;