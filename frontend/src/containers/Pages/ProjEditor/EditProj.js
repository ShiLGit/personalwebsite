import React, {Component} from 'react';
import styles from '../FormStyles.module.css';
import Loader from '../../../components/UI/Loader';

import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../../../redux/actions/actionTypes';
import { Redirect } from 'react-router-dom';
const allowedFileExts = ['.png', '.jpg', '.gif', 'jpeg'];
class EditProj extends Component{
    //REALLY BADLY DESIGNED BUT CURPROJID = PROJ ID HELD BY PARENT COPONENT, projID = USER INPUT
    state = {
        curProjID: this.props.curProjID,

        projName: "",
        category: "Web Dev",
        titleDesc: "",
        icon: null,
        demoImage: null,
        bodyMarkup: "",
        projID: "",
        loading: false, 

        iconName: "",
        demoImageName:""
    }
    componentDidUpdate(){
        console.log(this.state);

        //load selected project from ProjectList data onto form
        if(this.props.curProjID && this.state.curProjID !== this.props.curProjID){
            for(let i = 0; i < this.props.projects.length; i++){
                if(this.props.projects[i].projID === this.props.curProjID){
                    this.setState({...this.props.projects[i]});
                }
            }
        }

        if(this.props.curProjID !== this.state.curProjID){
            this.setState({curProjID: this.props.curProjID});
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
        this.setState({iconName: this.state.projID+ "_icon"+ e.target.files[0].type.replace('image/', '.')});   
        console.log('posticonchange', this.state);

    }
    demoImageChangeHandler = (e)=>{
        this.setState({demoImage: e.target.files[0]});
        this.setState({demoImageName: this.state.projID +"_demo" + e.target.files[0].type.replace('image/', '.')});

        console.log('post deomiamgechange', this.state);
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

        
        //reformat image names to match projID 
        if(this.state.demoImageName.indexOf(this.state.projID) === -1 && this.state.projID.length > 0){
            console.log(`([${this.state.projID}], [${parsedID}]), [${this.state.demoImageName}], FINAL:  ${this.state.demoImageName.replace(this.state.projID, parsedID)}`)
            this.setState(prev=>({demoImageName: prev.demoImageName.replace(this.state.projID, parsedID)}));
        }
        console.log(this.state.iconName.indexOf(this.state.projID), this.state.projID.length > 0)
        if(this.state.iconName.indexOf(this.state.projID) === -1 && this.state.projID.length > 0){
            this.setState(prev=>({iconName: prev.iconName.replace(this.state.projID, parsedID)}));
        }
        
        this.setState({projID: parsedID});   

    }

    clearCurProj = ()=>{
        this.props.setCurProj(null);
        this.setState({
            curProjID: this.props.curProjID,

            projName: "",
            category: "Web Dev",
            titleDesc: "",
            icon: null,
            demoImage: null,
            bodyMarkup: "",
            projID: "",
            loading: false
        })
        console.log("nustate: ", this.state);
    }
    editProj= ()=>{

        //get object w/ project text properties from this.state
        const clone = {...this.state};
        const {loading, icon, demoImage, curProjID, ...payload} = clone;
         //edit project
         axios.put('http://localhost:5000/projects/edittext/' + this.state.curProjID, payload, {headers: {'Authorization': `${this.props.token}`}})
         .then(res=>{
             this.setState({loading: false});
             alert(res.data.success);
             console.log("updated", res.data.updated);
             this.props.updateProject(res.data.updated);

         })
         .catch(e=>{
             this.setState({loading: false});
            alert(e);
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
            const {loading, icon, demoImage, curProjID, _id, ...payload} = clone;
            //upload other projdata :/projects/addprojdata
            axios.post('http://localhost:5000/projects/addtext', payload, {headers: {'Authorization': `${this.props.token}`}})
            .then(res=>{
                alert(res.data.success);
                let update = res.data.saved;
                if(update.curProjID)
                    delete update.curProjID;
                console.log("Saving project: ", update);
                this.props.addProject(update);
            }).catch(e=>alert("Error from addtext:" + e.message +"\n\tCheck if your projID is unique."));

    }
    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.setState({loading: true});
        if(this.state.projID === 'null'){
            this.clearCurProj();
            return alert("Project Identifier: 'null' is a reserved word.");
        }else if (allowedFileExts.indexOf(this.state.iconName.slice(-4))!= -1 || allowedFileExts.indexOf(this.state.demoImageName.slice(-4))!= -1){
            this.setState({loading: false});
            return alert("Invalid file extension on either icon or demo image!");
        }
        //project upload
        if(!this.state.curProjID){
            const fData = new FormData();
            if(this.state.icon.type.includes('image')){
                const imgName = this.state.projID;

                fData.append('pictures', this.state.icon, imgName + "_icon"+ this.state.icon.type.replace('image/', '.'));
                fData.append('pictures', this.state.demoImage, imgName +"_demo" + this.state.demoImage.type.replace('image/', '.')); 
            }else{
                this.setState({loading: false});
                return alert("Error: icon/demo image must be of image file format.");
            }
            alert("addprojgin()")
            this.addProj(fData);    
        }else{ 
            this.editProj();
        }
        e.preventDefault();
    };
    
    render(){   
        let toRender = null;
        
        if(!this.props.token)
            toRender = <Redirect to = '/unauthorized'/>;
            
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
                    
                    <select name = "Category" onChange={this.categoryChangeHandler}>
                        <option value = "Web Dev">Web Dev</option>
                        <option value = "School">School</option>
                        <option value = "Other">Other</option>
                    </select>
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