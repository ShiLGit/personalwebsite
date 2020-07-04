import React, {Component} from 'react';
import axios from 'axios'
import styles from './LoginForm.module.css'

class LoginForm extends Component{
    state = {
        username: "",
        password: ""
    }
    updateName=(e)=>{
        this.setState({username: e.target.value});
    }
    updatePassword=(e)=>{
        this.setState({password: e.target.value});
    }
    loginAttempt=(e)=>{
        e.preventDefault();

        alert(">>>>>>>>>>>");
        console.log(this.state);
        axios.post('http://localhost:5000/login', this.state)
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
            <label>Admin Name</label>
            <input type = "text" required onChange={this.updateName} autoComplete="off"></input>
            <br/>
            <label>Password</label>
            <input type = "text" required onChange={this.updatePassword} autoComplete="off"></input>
            <input type="submit" value="Login"/>
        </form>
    );
    }
}

export default LoginForm;