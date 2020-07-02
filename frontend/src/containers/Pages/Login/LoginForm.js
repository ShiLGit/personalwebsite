import React from 'react';
import axios from 'axios'
import styles from './LoginForm.module.css'
class LoginForm extends React.Component{
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
    loginAttempt=()=>{
        alert(">>>>>>>>>>>");
        
        axios.post('https://localhost:5000/login')
        .then(res=>{
            alert(res);
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
    return(
        <form className={styles.Form}>
            <label>Email</label>
            <input type = "text" required onChange={this.updateEmail}></input>
            <br/>
            <label>Password</label>
            <input type = "password" required onChange={this.updatePassword}></input>
            <input type="submit" value="Login" onClick={this.loginAttempt}/>
        </form>
    );
    }
}

export default LoginForm;