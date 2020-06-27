import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Drawer from '../../components/Navigation/Drawer/Drawer';

import Landing from '../Pages/Landing/Landing';

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
                        <Route path = '/' exact component = {Landing}/>
                    </Switch>

                </div>
            </div>
        )
    }
}

export default Layout