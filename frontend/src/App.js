import React, {Component} from 'react';
import Layout from './containers/Layout/Layout.js';
import {BrowserRouter} from 'react-router-dom';

import * as actionTypes from './redux/actions/actionTypes';
import {connect} from 'react-redux';
import axios from 'axios';

class App extends Component{
  componentDidMount(){

    axios.get('http://localhost:5000/projects/init')
      .then(res=>{
        console.log(res.data);
        this.props.initProjects(res.data.projects);
      })
      .catch(e=>{
        alert("errror!!!!");
        console.log(e);
      })
  }

  render(){
    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      );
  }
}

const dispatchToProps = dispatch=>{
  return {
    initProjects: (projects)=>dispatch({type: actionTypes.LOAD_PROJECTS, projects}),
  };
}

export default connect(null, dispatchToProps)(App)
