import React, {Component} from 'react';
import styles from './ProjViewer.module.css';
import Carousel from '../../../components/Carousel/Carousel';
import {connect} from 'react-redux';
class ProjViewer extends Component{
    state={
        curProjID: this.props.match.params.projID,
        curProj: this.props.projects.find(p=>p.projID === this.props.match.params.projID )
    }
    //update projviewer if url params changed/props.projects loaded in (previously undefined, usually just applies on component init)
    componentDidUpdate(){
        if(this.props.match.params.projID !== this.state.curProjID || !this.state.curProj){
            this.setState({curProjID: this.props.match.params.projID, curProj: this.props.projects.find(p=>p.projID === this.props.match.params.projID )});
        }
    }

    render(){
        return(
        <div className={styles.Wrapper}>
                <div className={styles.TitleWrapper}>
                    <h1>{this.state.curProj?this.state.curProj.projName:"Loading..."}</h1>
                </div>
                
                <img src="https://picsum.photos/200/300?grayscale" className={styles.DemoImage}/>
                <div className={styles.CarouselWrapper}>
                    <Carousel category="all"/>
                </div>
            <div className = {styles.TextWrapper}>
                {this.state.curProj?this.state.curProj.bodyMarkup:"Loading.."}
            </div>
        </div>);
    }

}
const stateToProps = (state)=>{
    return{
        projects: state.projReducer.projects
    }
}
export default connect(stateToProps)(ProjViewer);