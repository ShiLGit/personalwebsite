import React, {Component} from 'react';
import axios from 'axios'
import styles from './LoginForm.module.css'

import {Redirect} from 'react-router-dom';
import * as actionTypes from '../../../redux/actions/actionTypes';
import {connect} from 'react-redux';

import Loader from '../../../components/UI/Loader';
class LoginForm extends Component{
    state = {
        username: "",
        password: "",
        redirect: false,
        loading: false
    }
    updateName=(e)=>{
        this.setState({username: e.target.value});
    }
    updatePassword=(e)=>{
        this.setState({password: e.target.value});
    }
    loginAttempt=(e)=>{
        e.preventDefault();

        console.log(this.state);
        this.setState({loading: true});
        axios.post('http://localhost:5000/admin/login', this.state)
        .then(res=>{
            this.setState({loading: false});

            //incorrect authentication data handler
            if(res.data.fail){
                alert(res.data.fail);
            }else{
                this.props.updateToken(res.data.token);
                this.setState({redirect: true});
            }

        })
        .catch(err=>{
            this.setState({loading: false});

            this.setState({username: "", password: ""})
            alert(err);
        })
    }
    render(){
    let redirect = null;
    if(this.state.redirect){
        redirect = <Redirect to ="/logout"/>
    }
    let formBody = (
        <form className={styles.Form}  onSubmit={this.loginAttempt}>
            <label>Admin Name</label>
            <input type = "text" required value = {this.state.username}onChange={this.updateName} autoComplete="off"></input>
            <br/>
            <label>Password</label>
            <input type = "password" required value = {this.state.password} onChange={this.updatePassword} autoComplete="off"></input>
            <input type="submit" value="Login"/>
        </form>
    );


    return(
        <React.Fragment>
        {redirect}
        {this.state.loading? <Loader/>:formBody}
        </React.Fragment>
    );
    }
}
const dispatchToProps = dispatch=>{
    return{
        updateToken: (token)=>dispatch({
            type: actionTypes.UPDATE_TOKEN,
            token
        })
    };
}
export default connect(null, dispatchToProps)(LoginForm);