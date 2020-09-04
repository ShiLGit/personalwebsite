import React, {Component} from 'react';
import styles from './ProjViewer.module.css';
import Carousel from '../../../components/Carousel/Carousel';
import {connect} from 'react-redux';
import Loader from '../../../components/UI/Loader';
import {Redirect} from 'react-router-dom';
class ProjViewer extends Component{
    state={
        curProjID: this.props.match.params.projID,
        curProj: null
    }
    //update projviewer if url params changed/props.projects loaded in (previously undefined, usually just applies on component init)
    componentDidUpdate(){
        if(this.props.match.params.projID !== this.state.curProjID || !this.state.curProj){
            this.setState({curProjID: this.props.match.params.projID, curProj: this.props.projects.find(p=>p.projID === this.props.match.params.projID )});
        }
    }

    render(){
        let toRender = (<div><br/><br/><br/><br/><br/><Loader/></div>);
        if(this.state.curProj){
            toRender = (<div className={styles.Wrapper}>
                <div className={styles.TitleWrapper}>
                    <h1>{this.state.curProj.projName}</h1>
                </div>
                
                <img src={require('../../../pictures/proj/' + this.state.curProj.demoImageName )} className={styles.DemoImage}/>
                <div className={styles.CarouselWrapper}>
                    <Carousel category="all"/>
                </div>
            <div className = {styles.TextWrapper}>
                {this.state.curProj.bodyMarkup}
            </div>
        </div>)
        }else if(this.props.match.params.projID === 'null' || !this.props.match.params.projID){
            if(this.props.projects.length > 0)
                toRender = <Redirect to = {"/projects/" + this.props.projects[0].projID}/>
        }
        return(toRender);
    }

}
const stateToProps = (state)=>{
    return{
        projects: state.projReducer.projects
    }
}
export default connect(stateToProps)(ProjViewer);