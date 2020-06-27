import React from 'react';

import DrawerOptions from './DrawerElements/DrawerOptions';
import Hamburger from './DrawerElements/Hamburger';
class Drawer extends React.Component{
    state={
        drawerOpen: false
    }
    toggleDrawer=()=>{
        this.setState(prev=>({drawerOpen: !prev.drawerOpen}));
        console.log(this.state.drawerOpen)
    }
    render(){
        return(
        <div style ={{backgroundColor:'red'}}>       
            <Hamburger clickHandler={this.toggleDrawer} active ={this.state.drawerOpen}/>
            <DrawerOptions drawerOpen={this.state.drawerOpen} toggleDrawer={this.toggleDrawer}/>
        </div>
        );
    }
}

export default Drawer;