import React from 'react';
import LoginForm from './LoginForm';
const Login=()=>{
    const style={
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '15vh',
        gridRowStart: '2'

    }
    return(
        <div style={style}>
            <h1>ARE YOU ME?</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;