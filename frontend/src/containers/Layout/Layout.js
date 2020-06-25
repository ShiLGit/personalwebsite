import React, {Component} from 'react';
import classes from './Layout.module.css';
import Accordions from '../Accordions/Accordions';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Hamburger from '../../components/Navigation/Drawer/Hamburger';
class Layout extends Component{
    state = {
        active: '/'
    };
    
    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar/>
                    <Hamburger/>
                </div>
                <div className={classes.Body}>
                    <div className={classes.Accordions}>
                        <Accordions/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout