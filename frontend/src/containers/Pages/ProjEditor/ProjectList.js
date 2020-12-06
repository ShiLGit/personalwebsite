import React from 'react';
import {connect} from 'react-redux';
import styles from './ProjectList.module.css';
import axios from 'axios';
import * as actionTypes from '../../../redux/actions/actionTypes';
const ProjectList = (props)=>{
    function deleteUnit(docID, projID){
        let ans = window.confirm("Delete this project??");
        if(ans){
            axios.delete('http://localhost:5000/projects/delete/'  +docID + '/'+projID, {headers: {'Authorization': `${props.token}`}})
            .then(res=>{
                props.loadProj(null);
                alert(res.data.success);
                props.removeProject(res.data.deleted.projID);
            })
            .catch(e=>{alert(e)});
        }
    }

    const projects = props.projects;
    const list = projects.map(p=>{
        
        return (
        <div className = {styles.ProjUnit} key = {p._id} onClick={()=>props.loadProj(p.projID)}>
            <button onClick = {()=>deleteUnit(p._id, p.projID)}>X</button>
            <p>{p.projID}</p><p>{p.projName}</p>
        </div>)});
    console.log(projects);
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
    return {
        removeProject: (projID)=>dispatch({type: actionTypes.REMOVE_PROJECT, removeID: projID})
    }
}
const stateToProps = (state)=>{
    return {
        projects: state.projReducer.projects,
        token: state.authReducer.token
    };
}
export default connect(stateToProps, dispatchToProps)(ProjectList);