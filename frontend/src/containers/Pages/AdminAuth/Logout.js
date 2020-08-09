import React from 'react';
import styles from '../FormStyles.module.css'
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../../../redux/actions/actionTypes';
const LogoutForm = (props)=>{
    console.log(props)
    let logoutForm = (
        <Redirect to = "/login"></Redirect>
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
        logout: ()=>dispatch({type: actionTypes.LOGOUT})
    };
}

export default connect(stateToProps, dispatchToProps)(LogoutForm);