import React from 'react';
import styles from '../FormStyles.module.css';

import {connect} from 'react-redux';
const EditProj = (props)=>{
    return(
        <form className = {styles.Form} style ={{marginTop: '90px'}}>
            <label style ={{marginBottom: '-20px'}}>Project Name</label>
            <input type ="text" required></input>
            <br/>
            <label style ={{marginBottom: '-20px'}}>Category</label>
            <input type ="text" required></input>
            <br/>
            <label>Icon</label>
            <input type ="file" style = {{margin: 'auto'}} required></input>
            <br/>
            <label>Demo Image</label>
            <input type = "file" style = {{margin: 'auto'}} required></input>
            <br/>
            <label>Description</label>
            <textarea rows = {10} required></textarea>
            <input type = "submit" value = "Save"/>
        </form>
    );
}
const stateToProps = (state)=>{
    return{token: state.authReducer.token};
}
export default connect(stateToProps)(EditProj);