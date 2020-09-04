import React from 'react';
import classes from './ProjUnit.module.css';
import { NavLink } from 'react-router-dom';
// + props.img
const ProjUnit = (props)=>{
    return(
    <NavLink to = {'/projects/' + props.projID} activeClassName={classes.Active}>

    <div className={classes.Wrapper} style = {{gridColumnStart: props.gridColumnStart}}>
        <img alt="PLACEHOLDERALT" className={classes.Image} src={require('../../../pictures/proj/' + props.img )}/>
        <h5>{props.desc.replace(" ", "\n")}</h5>
    </div>
    </NavLink>);
}

export default ProjUnit;