import React, {Component} from 'react';
import axios from 'axios'
import styles from './LoginForm.module.css'

import {Redirect} from 'react-router-dom';
import actions from '../../../redux/actions/actions';
import {connect} from 'react-redux';
class LoginForm extends Component{
    state = {
        username: "",
        password: "",
        redirect: false
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
        axios.post('http://localhost:5000/admin/login', this.state)
        .then(res=>{
            //incorrect authentication data handler
            if(res.data.fail){
                alert(res.data.fail);
            }else{
                this.props.updateToken(res.data.token);
                this.setState({redirect: true});
                localStorage.setItem('token', res.data.token);
            }
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
    let redirect = null;
    if(this.state.redirect){
        redirect = <Redirect to ="/logout"/>
    }
    return(
        <React.Fragment>
        {redirect}
        <form className={styles.Form}  onSubmit={this.loginAttempt}>
            <label>Admin Name</label>
            <input type = "text" required onChange={this.updateName} autoComplete="off"></input>
            <br/>
            <label>Password</label>
            <input type = "password" required onChange={this.updatePassword} autoComplete="off"></input>
            <input type="submit" value="Login"/>
        </form>
        </React.Fragment>
    );
    }
}
const dispatchToProps = dispatch=>{
    return{
        updateToken: (token)=>dispatch(actions.updateToken(token))
    };
}
export default connect(null, dispatchToProps)(LoginForm);