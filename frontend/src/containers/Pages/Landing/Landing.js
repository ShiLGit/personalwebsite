import React from "react";
import styles from "./Landing.module.css";

import portrait from "../../../pictures/vectorhead.png";
import Heading from "../../../components/Decoration/Heading";
import Accordions from "../../Accordions/Accordions";
import { PROFILE_DESC } from "../../../textConstants";
import { connect } from "react-redux";
const Landing = (props) => {
	return (
		<div className={styles.Body}>
			<div>
				<img className={styles.Picture} alt='MY HEAD' src={portrait} />
				<h4 className={styles.ProfileDesc}>{props.bio}</h4>
			</div>
			<div>
				<Heading />
				<div className={styles.Accordions}>
					<Accordions />
				</div>
				<div className={styles.BottomBar}>© Me 2020</div>
			</div>
		</div>
	);
};
const stateToProps = (state) => {
	return { bio: state.fpageReducer.bio };
};
export default connect(stateToProps)(Landing);
