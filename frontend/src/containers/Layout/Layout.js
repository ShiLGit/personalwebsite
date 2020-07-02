import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Email from '../Pages/Email/Email';
class Layout extends Component{
    state = {
        active: '/',
    };
    render(){
        return(
            <div className={styles.All}>
                <div>
                    <Navbar/>
                    <Drawer/>
                </div>
                <div className={styles.Body} >
                    <Switch>
                        <Route path = '/' exact component = {Landing}/>
                        <Route path = '/email' exact component = {Email}/>
                        <Route path = '/login' exact component={Login}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Layout