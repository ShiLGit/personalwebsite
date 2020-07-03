import React, {Component} from 'react';

import styles from './EmailForm.module.css';
class Email extends Component{
    state = {}
    render(){
        return(
        <div className={styles.Wrapper}>
            <h1 className={styles.Heading}>SEND AN EMAIL</h1>
            <form className={styles.Form}>
            <label>Your Name</label>
            <input type = "text" required></input>
            <br/>
            <label>Your Email (Optional)</label>
            <input type = "email"></input>
            <br/>
            <br/>
            <label>Message</label>
            <textarea required className={styles.TextArea} rows={10}></textarea>
            <br/>

            <input type="submit" value="Send Email" />
            </form>
        </div>
        )
    }

}

export default Email;