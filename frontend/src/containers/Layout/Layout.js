import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

import Landing from '../Pages/Landing/Landing';

class Layout extends Component{
    state = {
        active: '/',
    };
    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar/>
                    <Drawer/>
                </div>
                <div className={classes.Body} >
                    <Switch>
                        <Route path = '/' exact component = {Landing}/>
                        <Route path = '/' exact component = {Landing}/>
                    </Switch>

                </div>
            </React.Fragment>
        )
    }
}

export default Layout