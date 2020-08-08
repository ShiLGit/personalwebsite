import React, {Component} from 'react';
import styles from '../FormStyles.module.css';
import Loader from '../../../components/UI/Loader';

import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../../../redux/actions/actionTypes';
import { Redirect } from 'react-router-dom';

class EditProj extends Component{
    //REALLY BADLY DESIGNED BUT CURPROJID = PROJ ID HELD BY PARENT COPONENT, projID = USER INPUT
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
        if(this.props.curProjID && this.state.curProjID !== this.props.curProjID){
            for(let i = 0; i < this.props.projects.length; i++){
                if(this.props.projects[i].projID === this.props.curProjID){
                    this.setState({...this.props.projects[i]});
                }
            }
        }

        if(this.props.curProjID !== this.state.curProjID){
            this.state.curProjID = this.props.curProjID;
            if(this.props.curProjID === null)
                this.clearCurProj();
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
        const allowedChars = /^[a-zA-Z0-9]+$/;
        let id = e.target.value;
        let parsedID = "";
        for(let i = 0; i < id.length; i++){
            if(id[i].match(allowedChars))
                parsedID += id[i]; 
        }

        this.setState({projID: parsedID});   
    }

    clearCurProj = ()=>{
        this.props.setCurProj(null);
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
    editProj= ()=>{

        //get object w/ project text properties from this.state
        const clone = {...this.state};
        const {loading, icon, demoImage, ...payload} = clone;

         //edit project
         axios.put('http://localhost:5000/projects/edittext/' + this.state.curProjID, payload)
         .then(res=>{
             this.setState({loading: false});
             alert(res.data.success);
             this.props.updateProject(res.data.updated)
         })
         .catch(e=>{
             this.setState({loading: false});

             console.log(e);
         })

    }
    addProj = (fData)=>{
            if(!this.props.token){
                this.setState({loading: false});
                return alert("aint no token...");
            }
            //upload pictures
            axios.post('http://localhost:5000/projects/addpic', fData, {headers: {'Authorization': `${this.props.token}`}})
            .then(res=>{
                this.setState({loading: false});
            })
            .catch(e=>{
                this.setState({loading: false});
                alert("Error adding images" + e);
                console.log(e);
            });

            //get object w/ project text properties from this.state
            const clone = {...this.state};
            const {loading, icon, demoImage, ...payload} = clone;

            //upload other projdata :/projects/addprojdata
            axios.post('http://localhost:5000/projects/addtext', payload, {headers: {'Authorization': `${this.props.token}`}})
            .then(res=>{
                alert(res.data.success);
                let update = res.data.saved;
            
                if(update.curProjID)
                    delete update.curProjID;
                if(update._id)
                    delete update._id;

                console.log("Saving project: ", update);
                this.props.addProject(update);
            }).catch(e=>alert("Error from addtext:" + e.message +"\n\tCheck if your projID is unique."));

    }
    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.setState({loading: true});

        //project upload
        if(!this.state.curProjID){
            
            const fData = new FormData();
            if(this.state.icon.type.includes('image')){
                const imgName = this.state.projID;
                fData.append('pictures', this.state.icon, imgName + "_icon"+ this.state.icon.type.replace('image/', '.'));
                fData.append('pictures', this.state.demoImage, imgName +"_demo" + this.state.icon.type.replace('image/', '.'));    
            }else{
                this.setState({loading: false});
                return alert("Error: icon/demo image must be of image file format.");
            }
            this.addProj(fData);    
        }else{ 
            this.editProj();
        }
        e.preventDefault();
    };
    
    render(){   
        let toRender = null;
        /*
        if(!this.props.token)
            toRender = <Redirect to = '/unauthorized'/>;
            */
        const toggleAddProj = <button style ={{position: 'absolute', top: '0px', right: '0px'}} onClick={this.clearCurProj}>
                                    Add Project
                              </button>;
        let required = !this.state.curProjID;

        return(
            <React.Fragment>
                {toRender}
                {this.state.loading? <Loader style={{marginTop:"30vh"}}/>:
                <form className = {styles.Form} style ={{marginTop: '90px', minWidth: 'fit-content', position: 'relative'}} onSubmit={this.onSubmitHandler} encType='multipart/form-data'>
                    {this.props.curProjID?toggleAddProj:null}
                    <h2 style={{textAlign: 'center', marginTop: '-10px', display: 'inline-block'}}>{this.props.curProjID?"Edit " + this.props.curProjID: "Add Project"}</h2>
                
                    <label style ={{marginBottom: '-20px'}}>Project Identifier</label>
                    <input type ="text" required={required} disabled ={!required} onChange={this.identifierChangeHandler} value = {this.state.projID}></input>
                    
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
                    <input type ="file" style = {{margin: 'auto'}} required={required} onChange={this.iconChangeHandler}></input>
                    <br/>
                    <label>Demo Image</label>
                    <input type = "file" style = {{margin: 'auto'}} required={required} onChange={this.demoImageChangeHandler}></input>
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
    return{
        addProject: (toAdd)=>dispatch({type: actionTypes.ADD_PROJECT, toAdd}),
        updateProject: (updatedProj)=>dispatch({type: actionTypes.UPDATE_PROJECT, updatedProj})
    };
}
export default connect(stateToProps, dispatchToProps)(EditProj);