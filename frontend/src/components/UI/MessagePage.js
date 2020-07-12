import React from 'react';
import styles from './CSS/MessagePage.module.css';
//for stuff like 404/ u aint authorized
const Unauthorized = (props)=> {
    return(
        <div style ={{ margin: 'auto', marginTop: '300px', textAlign: 'center'}} className = {styles.Wrapper}>
            <h1>{props.message}</h1>
        </div>

    )
}

export default Unauthorized;