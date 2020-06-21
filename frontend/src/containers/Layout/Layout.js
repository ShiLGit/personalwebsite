import React, {Component} from 'react';
import classes from './Layout.module.css';
import Accordions from '../Accordions/Accordions';
class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <div className={classes.Navbar}>
                    <h3>Navbar/Hamburger!!</h3>                
                </div>
                <main className={classes.Body}>
                    <Accordions/>
                </main>
            </React.Fragment>
        )
    }
}

export default Layout