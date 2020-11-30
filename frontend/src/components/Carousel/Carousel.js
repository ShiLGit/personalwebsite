import React, { Component } from "react";
import ProjUnit from "./ProjUnit/ProjUnit";
import styles from "./Carousel.module.css";
import Arrow from "./Arrow";

import { connect } from "react-redux";
//will receive projtype prop that dictates which category (web dev, school, other) gets rendered
class Carousel extends Component {
	state = {
		projects: [],
		init: false, //props.projects is initially null because you have to w8 for server res, this flag for indicating whether to change state.proj
		index: 0
	};
	indexDecrement = () => {
		this.setState((prevState) => {
			return {
				index: prevState.index - 1 < 0 ? this.state.projects.length - 1 : prevState.index - 1
			};
		});
	};
	indexIncrement = () => {
		this.setState((prevState) => {
			return {
				index: prevState.index + 1 === this.state.projects.length ? 0 : prevState.index + 1
			};
		});
	};

	componentDidMount() {
		if (this.props.projects)
			this.setState({
				projects: this.props.projects.filter(
					(proj) => proj.category === this.props.category || this.props.category === "all"
				)
			});
	}
	//fires if projects prop lags to load. otherwise projects get init in componentdidmount
	componentDidUpdate() {
		if (!this.state.init && this.props.projects.length > 0 && this.state.projects.length === 0) {
			this.setState({
				projects: this.props.projects.filter(
					(proj) => proj.category === this.props.category || this.props.category === "all"
				),
				init: true
			});
		}
	}
	//given starting index (state.index), return indices of all projects to show
	getIndices = () => {
		const indices = [];
		let curIndex = this.state.index;
		indices[0] = curIndex;
		for (let i = 1; i < Math.min(3, this.state.projects.length); i++) {
			curIndex++;
			if (curIndex >= this.state.projects.length) {
				curIndex = 0;
			}
			indices[i] = curIndex;
		}

		return indices;
	};

	render() {
		const indices = this.getIndices();
		return (
			<div className={styles.Body}>
				<Arrow clickHandler={this.indexIncrement} cssClass='LeftArrow' gridColumnStart={1} />
				<div className={styles.ProjUnitWrapper}>
					{this.state.projects.length > 0
						? indices.map((indicesIdx, arrayIdx) => {
								return (
									<ProjUnit
										key={arrayIdx}
										desc={this.state.projects[indicesIdx].titleDesc}
										gridColumnStart={arrayIdx + 1}
										img={this.state.projects[indicesIdx].iconName}
										projID={this.state.projects[indicesIdx].projID}
									/>
								);
						  })
						: null}
				</div>
				<Arrow clickHandler={this.indexDecrement} cssClass='RightArrow' gridColumnStart={3} />
			</div>
		);
	}
}
const stateToProps = (state) => {
	return { projects: state.projReducer.projects };
};
export default connect(stateToProps)(Carousel);
