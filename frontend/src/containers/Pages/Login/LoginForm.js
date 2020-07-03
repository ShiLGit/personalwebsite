import React, {Component} from 'react';
import axios from 'axios'
import styles from './LoginForm.module.css'

class LoginForm extends Component{
    state = {
        email: "",
        password: ""
    }
    updateEmail=(e)=>{
        this.setState({email: e.target.value});
    }
    updatePassword=(e)=>{
        this.setState({password: e.target.value});
    }
    loginAttempt=(e)=>{
        e.preventDefault();

        alert(">>>>>>>>>>>");

        axios.post('/login', this.state)
        .then(res=>{
            console.log(res);
            alert(res);
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
    return(
        <form className={styles.Form}  onSubmit={this.loginAttempt}>
            <label>Email</label>
            <input type = "text" required onChange={this.updateEmail} autoComplete="off"></input>
            <br/>
            <label>Password</label>
            <input type = "text" required onChange={this.updatePassword} autoComplete="off"></input>
            <input type="submit" value="Login"/>
        </form>
    );
    }
}

export default LoginForm;