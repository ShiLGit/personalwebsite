import React from "react";
import styles from "./Landing.module.css";

import portrait from "../../../pictures/vectorhead.png";
import Heading from "../../../components/Decoration/Heading";
import Accordions from "../../Accordions/Accordions";
import { PROFILE_DESC } from "../../../textConstants";
const Landing = () => {
	return (
		<div className={styles.Body}>
			<div>
				<img className={styles.Picture} alt='MY HEAD' src={portrait} />
				<h4 className={styles.ProfileDesc}>{PROFILE_DESC}</h4>
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

export default Landing;
