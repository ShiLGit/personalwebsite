import React from 'react';
import styles from './EmailForm.module.css';
class Email extends React.Component{
    state = {}
    render(){
        return(
        <div className={styles.Wrapper}>
            <h1>SEND A MESSAGE</h1>
            <form className={styles.Form}>
            <label>Name</label>
            <input type = "text" required></input>
            <br/>
            <label>Your Email (Optional)</label>
            <input type = "email"></input>
            <br/>
            <br/>
            <label>Message</label>
            <textarea required className={styles.TextArea} rows={10}></textarea>
            <br/>

            <input type="submit" value="Send Message" />
            </form>
        </div>
        )
    }

}

export default Email;