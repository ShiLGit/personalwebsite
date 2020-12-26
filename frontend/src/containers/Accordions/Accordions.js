import React, { Component } from "react";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./Accordions.module.css";
import { connect } from "react-redux";

class Accordions extends Component {
	state = {
		active: -1,
		accordions: [
			{
				displayName: "Web Dev",
				key: 0,
				category: "Web Dev",
				dataKey: "webDevTS"
			},
			{
				category: "School",
				displayName: "School",
				key: 1,
				dataKey: "schoolTS"
			},
			{
				category: "Other",
				displayName: "Other",
				key: 2,
				dataKey: "otherTS"
			}
		]
	};
	accordionClickHandler = (key) => {
		this.setState((prev) => ({ active: prev.active === key ? -1 : key }));
	};
	componentDidMount() {
		console.log(this.props.fpageData);
	}

	render() {
		return (
			<div className={styles.Wrapper}>
				{this.state.accordions.map((acc) => {
					return (
						<Accordion
							{...acc}
							active={this.state.active === acc.key}
							clickHandler={() => this.accordionClickHandler(acc.key)}
							desc={this.props.fpageData[acc.dataKey]}
						/>
					);
				})}
			</div>
		);
	}
}
const stateToProps = (state) => {
	return { fpageData: state.fpageReducer };
};
export default connect(stateToProps)(Accordions);
