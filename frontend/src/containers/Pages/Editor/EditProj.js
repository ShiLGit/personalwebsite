import React, {Component} from 'react';
import styles from '../FormStyles.module.css';
import Loader from '../../../components/UI/Loader';

import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../../../redux/actions/actionTypes';
import { Redirect } from 'react-router-dom';

class EditProj extends Component{
    state = {
        curProjID: this.props.curProjID,

        projName: "",
        category: "",
        titleDesc: "",
        icon: null,
        demoImage: null,
        bodyMarkup: "",
        projID: "",
        loading: false
    }
    componentDidUpdate(){
        //load selected project from ProjectList data onto form
        if(this.props.curProjID && this.state.projID !== this.props.curProjID){
            for(let i = 0; i < this.props.projects.length; i++){
                if(this.props.projects[i].projID === this.props.curProjID){
                    this.setState({...this.props.projects[i]});
                }
            }
        }
    }

    projChangeHandler = (e)=>{
        this.setState({projName: e.target.value});
    }
    categoryChangeHandler = (e)=>{
        this.setState({category: e.target.value});
    }
    titleDescChangeHandler = (e)=>{
        this.setState({titleDesc: e.target.value});   
    }
    iconChangeHandler = (e)=>{
        this.setState({icon: e.target.files[0]});  
        console.log(this.state.icon) 
    }
    demoImageChangeHandler = (e)=>{
        this.setState({demoImage: e.target.files[0]});
        console.log(this.state);
    }
    bodyChangeHandler = (e)=>{
        this.setState({bodyMarkup: e.target.value});   
    }
    identifierChangeHandler = (e)=>{
        this.setState({projID: e.target.value});   
    }

    clearCurProj = ()=>{
        this.props.setCurProj(null);
        alert("WTF")
        this.setState({
            curProjID: this.props.curProjID,

            projName: "",
            category: "",
            titleDesc: "",
            icon: null,
            demoImage: null,
            bodyMarkup: "",
            projID: "",
            loading: false
        })
    }

    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.setState({loading: true});

        //convert state into FormData
        const fData = new FormData();
        fData.append('pictures', this.state.icon);
        fData.append('pictures', this.state.demoImage);
        
        if(this.props.path === '/projects/add'){
            //upload pictures
            axios.post('http://localhost:5000/projects/addpic', fData, {headers: {'Authorization': `${this.props.token}`}})
            .then(res=>{
                this.setState({loading: false});
                alert(res.data);
            })
            .catch(e=>{
                this.setState({loading: false});
                alert(e);
                console.log(e);
            });

            //get object w/ project text properties from this.state
            const clone = {...this.state};
            const {loading, icon, demoImage, ...payload} = clone;
            console.log(payload);

            //upload other projdata :/projects/addprojdata
            axios.post('http://localhost:5000/projects/addtext', payload, {headers: {'Authorization': `${this.props.token}`}})
            .then(res=>{
                alert("success!");
                this.props.addProject(res.data.saved);
            }).catch(e=>alert(e.message));
        }
        e.preventDefault();
    };
    
    render(){   
        let toRender = null;
        /*
        if(!this.props.token)
            toRender = <Redirect to = '/unauthorized'/>;
            */
        

        return(
            <React.Fragment>
                {toRender}
                {this.state.loading? <Loader style={{marginTop:"30vh"}}/>:
                <form className = {styles.Form} style ={{marginTop: '90px', minWidth: 'fit-content'}} onSubmit={this.onSubmitHandler} encType='multipart/form-data'>
                    <h2 style={{textAlign: 'center', marginTop: '-10px', display: 'inline-block'}}>{this.props.curProjID?"Edit " + this.props.curProjID: "Add Project"}</h2>
                    <button style ={{}} onClick={this.clearCurProj}>Add Project</button>
                    <label style ={{marginBottom: '-20px'}}>Project Identifier</label>
                    <input type ="text" required onChange={this.identifierChangeHandler} value = {this.state.projID}></input>
                    
                    <label style ={{marginBottom: '-20px'}}>Project Name</label>
                    <input type ="text" required onChange={this.projChangeHandler} value = {this.state.projName}></input>
                    <br/>
                    <label style ={{marginBottom: '-20px'}}>Category</label>
                    <input type ="text" required onChange={this.categoryChangeHandler} value = {this.state.category}></input>
                    <br/>
                    <label style ={{marginBottom: '-20px'}}>Title Desc</label>
                    <input type ="text" required onChange={this.titleDescChangeHandler} value = {this.state.titleDesc}></input>
                    <br/>
                    <label>Icon</label>
                    <input type ="file" style = {{margin: 'auto'}} required onChange={this.iconChangeHandler}></input>
                    <br/>
                    <label>Demo Image</label>
                    <input type = "file" style = {{margin: 'auto'}} required onChange={this.demoImageChangeHandler}></input>
                    <br/>
                    <label>Body (Markup)</label>
                    <textarea rows = {10} required onChange={this.bodyChangeHandler} value = {this.state.bodyMarkup}></textarea>
                    <input type = "submit" value = "Save"/>
                </form>
                }
                </React.Fragment>
        );
    }
    
}
const stateToProps = (state)=>{
    return{
        token: state.authReducer.token,
        projects: state.projReducer.projects
    };
}

const dispatchToProps = (dispatch)=>{
    return{addProject: (toAdd)=>dispatch({type: actionTypes.ADD_PROJECT, toAdd})};
}
export default connect(stateToProps, dispatchToProps)(EditProj);