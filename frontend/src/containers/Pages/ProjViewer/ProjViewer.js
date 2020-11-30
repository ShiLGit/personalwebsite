import React, { Component } from "react";
import styles from "./ProjViewer.module.css";
import Carousel from "../../../components/Carousel/Carousel";
import { connect } from "react-redux";
import Loader from "../../../components/UI/Loader";
import { Redirect } from "react-router-dom";
class ProjViewer extends Component {
	state = {
		curProjID: this.props.match.params.projID,
		curProj: null
	};
	componentDidMount() {
		console.log(
			this.state.curProjID,
			this.props.projects.find((p) => p.projID === this.props.match.params.projID)
		);
		this.setState({
			curProjID: this.props.match.params.projID,
			curProj: this.props.projects.find((p) => p.projID === this.props.match.params.projID)
		});
	}
	//fires every time url changes/proj props load in (ie on init)
	componentDidUpdate() {
		console.log("cdidupdate", this.props.match.params.projID !== this.state.curProjID, !this.state.curProj);
		//update project being displayed; url changed while state curProjId = prev proj id
		if (this.props.match.params.projID !== this.state.curProjID || !this.state.curProj) {
			const target = this.props.projects.find((p) => p.projID === this.props.match.params.projID);

			//case 1: an existing project matches route id
			if (target) {
				this.setState({
					curProjID: this.props.match.params.projID,
					curProj: target
				});
			} else if (!target && this.props.projects.length > 0) {
				//case 2: projects are loaded in but there's no match, load in proj#1 as default
				this.setState({ curProjID: this.props.projects[0].projID, curProj: this.props.projects[0] });
				this.props.history.push("/projects/" + this.props.projects[0].projID);
				console.log(
					"ProjViewer: no project matching id " + this.props.match.params.projID + ". Loading first project."
				);
			}
		}
	}

	render() {
		let toRender = (
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<Loader />
			</div>
		);
		console.log("rendering...", this.state);
		if (this.state.curProj) {
			toRender = (
				<div className={styles.Wrapper}>
					<div className={styles.TitleWrapper}>
						<h1>{this.state.curProj.projName}</h1>
					</div>

					<img
						src={require("../../../pictures/proj/" + this.state.curProj.demoImageName)}
						className={styles.DemoImage}
					/>
					<div className={styles.CarouselWrapper}>
						<Carousel category='all' />
					</div>
					<div
						className={styles.TextWrapper}
						dangerouslySetInnerHTML={{ __html: this.state.curProj.bodyMarkup }}
					></div>
				</div>
			);
		}
		return toRender;
	}
}
const stateToProps = (state) => {
	return {
		projects: state.projReducer.projects
	};
};
export default connect(stateToProps)(ProjViewer);
