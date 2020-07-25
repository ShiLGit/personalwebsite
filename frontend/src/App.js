import React, {Component} from 'react';
import Layout from './containers/Layout/Layout.js';
import {BrowserRouter} from 'react-router-dom';

import * as actionTypes from './redux/actions/actionTypes';
import {connect} from 'react-redux';

class App extends Component{
  componentDidMount(){
    this.props.initProjects();
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
  return {initProjects: ()=>dispatch({type: actionTypes.INIT_PROJECTS})};
}

export default connect(null, dispatchToProps)(App)
