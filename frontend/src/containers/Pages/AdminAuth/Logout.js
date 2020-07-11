import React from 'react';
import styles from '../FormStyles.module.css'

import {connect} from 'react-redux';
import * as actionTypes from '../../../redux/actions/actionTypes';
const LogoutForm = (props)=>{
    console.log(props)
    let logoutForm = (
        <h1 style={{margin: '20vh 30vw', textAlign:'center'}}>You are not logged in.</h1>
    )
    if(props.token){
        logoutForm=(
            <form className={styles.Form} style={{marginTop: '15vh'}} onSubmit={props.logout}>
                <h1 style ={{textAlign: 'center'}}>You are currently logged in.</h1>
                <input type="submit" value="Logout"/>
            </form >
        );
    }
    return(logoutForm);
}

const stateToProps = (state)=>{
    return {token: state.authReducer.token};
}
const dispatchToProps = (dispatch)=>{
    return {
        logout: dispatch(actionTypes.LOGOUT)
    };
}

export default connect(stateToProps)(LogoutForm);