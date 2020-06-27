import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
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