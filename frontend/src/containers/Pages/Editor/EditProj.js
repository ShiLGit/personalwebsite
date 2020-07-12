import React, {Component} from 'react';
import styles from '../FormStyles.module.css';

import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
class EditProj extends Component{
    state = {
        projName: "",
        category: "",
        titleDesc: "",
        icon: null,
        demoImage: null,
        body: ""

    }
    projChangeHandler = (e)=>{
        this.setState({projName: e.target.value});
    }
    categoryChangeHandler = (e)=>{
        this.setState({category: e.target.value});
    }
    titleChangeHandler = (e)=>{
        this.setState({titleDesc: ""});   
    }
    iconChangeHandler = (e)=>{
        this.setState({icon: e.target.files[0]});  
        console.log(this.state.icon) 
    }
    demoImageChangeHandler = (e)=>{
        this.setState({demoImage: e.target.files[0]});
    }
    bodyChangeHandler = (e)=>{
        this.setState({body: e.target.value});   
    }
    render(){
        let toRender = null;
        if(!this.props.token)
            toRender = <Redirect to = '/unauthorized'/>;
            
        return(
            <React.Fragment>
                {toRender}
                <form className = {styles.Form} style ={{marginTop: '90px', minWidth: 'fit-content'}}>
                    <label style ={{marginBottom: '-20px'}}>Project Name</label>
                    <input type ="text" required onChange={this.projChangeHandler} value = {this.state.projName}></input>
                    <br/>
                    <label style ={{marginBottom: '-20px'}}>Category</label>
                    <input type ="text" required onChange={this.categoryChangeHandler} value = {this.state.category}></input>
                    <br/>
                    <label style ={{marginBottom: '-20px'}}>Title Desc</label>
                    <input type ="text" required onChange={this.titleChangeHandler} value = {this.state.title}></input>
                    <br/>
                    <label>Icon</label>
                    <input type ="file" style = {{margin: 'auto'}} required onChange={this.iconChangeHandler}></input>
                    <br/>
                    <label>Demo Image</label>
                    <input type = "file" style = {{margin: 'auto'}} required onChange={this.demoImageChangeHandler}></input>
                    <br/>
                    <label>Body (Markup)</label>
                    <textarea rows = {10} required onChange={this.bodyChangeHandler} value = {this.state.body}></textarea>
                    <input type = "submit" value = "Save"/>
                </form>
                </React.Fragment>
        );
    }
    
}
const stateToProps = (state)=>{
    return{token: state.authReducer.token};
}
export default connect(stateToProps)(EditProj);