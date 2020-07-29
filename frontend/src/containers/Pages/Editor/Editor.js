import React, {Component} from 'react';
import ProjectList from './ProjectList';
import EditProj from './EditProj';

import axios from 'axios';
class Editor extends Component{
    state = {
        submitType: 'ADD',
        formTitle: 'Add Project',
        curProj: null
    }
    loadProj = (projID)=>{
        alert("HAY")
        this.setState({curProj: projID});
    }
    render(){
        const style = {
            display: 'grid',
            gridTemplateColumns: '70vw 30vw'
        }
        return(
            <div style ={style}>
                <EditProj path={this.state.submitPath} formTitle = {this.state.formTitle}/>
                <ProjectList loadProj = {(id)=>this.loadProj(id)}/>
            </div>
        )
    }
}

export default Editor;