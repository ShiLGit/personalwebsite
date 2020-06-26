import React, {Component} from 'react';
import classes from './Layout.module.css';
import Accordions from '../Accordions/Accordions';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Heading from '../../components/Decoration/Heading';
import portrait from '../../pictures/vectorhead.png';
import Drawer from '../../components/Navigation/Drawer/Drawer';

import Landing from '../Pages/Landing/Landing';
class Layout extends Component{
    state = {
        active: '/',
        drawerOpen: false
    };
    toggleDrawer=()=>{
        this.setState(prev=>({drawerOpen: !prev.drawerOpen}));
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar/>
                    <Drawer toggleDrawer={this.toggleDrawer} drawerOpen={this.state.drawerOpen} onClickHandler={this.toggleDrawer}/>
                </div>
                <div className={classes.Body} >
                    <Landing/>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout