import React from 'react';
import {connect} from 'react-redux';
import styles from './ProjectList.module.css';
import axios from 'axios';
import * as actionTypes from '../../../redux/actions/actionTypes';
const ProjectList = (props)=>{
    function deleteUnit(e, data){
        console.log(e);
        alert("Dilete??");
    }


    const projects = props.projects;
    const list = projects.map(p=>{
        return (
        <div className = {styles.ProjUnit} key = {p._id}>
            <button onClick = {(z)=>deleteUnit(p._id)}>X</button>
            <p>{p.projID}</p><p>{p.projName}</p>
        </div>)});
    return(
        <div className = {styles.Wrapper}>
        <p style ={{fontWeight:"bold", fontSize: 24, display: 'inline-block'}}>Projects</p>

        <div className = {styles.ListWrapper}>
            {list}
        </div>
        </div>
        
    )
}
const dispatchToProps = (dispatch)=>{
    return {initProjects: (projects)=>dispatch({type:actionTypes.INIT_PROJECTS, projects})}
}
const stateToProps = (state)=>{
    return {projects: state.projReducer.projects};
}
export default connect(stateToProps, dispatchToProps)(ProjectList);