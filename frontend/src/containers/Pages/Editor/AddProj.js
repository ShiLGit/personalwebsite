import React from 'react';
import styles from '../FormStyles.module.css';
const AddProj = ()=>{
    return(
        <form className = {styles.Form}>
            <label>Project Name</label>
            <input type ="text" required></input>
            <br/>
            <label>Icon</label>
            <input type ="file" style = {{margin: 'auto'}} required></input>
            <br/>
            <label>Demo Image</label>
            <input type = "file" style = {{margin: 'auto'}} required></input>
            <br/>
            <label>Description</label>
            <textarea rows = {14} required></textarea>
        </form>
    )
}

export default AddProj