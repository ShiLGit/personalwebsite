import React, {Component} from 'react';
import classes from './Layout.module.css';
import Accordions from '../Accordions/Accordions';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Hamburger from '../../components/Navigation/Drawer/Hamburger';
import Heading from '../../components/Decoration/Heading';
import portrait from '../../pictures/vectorhead.png';
import DrawerOptions from '../../components/Navigation/Drawer/DrawerOptions';

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
                    <Hamburger clickHandler={this.toggleDrawer}/>
                    <DrawerOptions open={this.state.drawerOpen}/>
                </div>
                <div className={classes.Body} >
                <img className={classes.Picture} alt="MY HEAD" src={portrait}/>
                    <div>
                    <Heading/>
                    <div className={classes.Accordions}>
                        <Accordions/>
                    </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Layout