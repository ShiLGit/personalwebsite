import React from 'react';

import styles from './LoginForm.module.css'
const LoginForm=()=>{
    return(
        <form className={styles.Form}>
            <label>Email</label>
            <input type = "text" required></input>
            <br/>
            <label>Password</label>
            <input type = "password" required></input>
            <input type="submit" value="Login" />
        </form>
    );
}

export default LoginForm;