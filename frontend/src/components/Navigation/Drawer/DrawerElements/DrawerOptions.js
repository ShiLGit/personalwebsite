import React from "react";
import styles from "./DrawerOptions.module.css";
import Backdrop from "../../../UI/Backdrop";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const DrawerOptions = (props) => {
	const authOptions = [];
	if (props.token) {
		authOptions.push(
			<NavLink to='/editfpage' activeClassName={styles.Active} key='3'>
				<h3 onClick={props.toggleDrawer}>Edit Front Page</h3>
			</NavLink>
		);
		authOptions.push(
			<NavLink to='/editproj' activeClassName={styles.Active} key='2'>
				<h3 onClick={props.toggleDrawer}>Edit Projects</h3>
			</NavLink>
		);
		authOptions.push(
			<NavLink to='/logout' activeClassName={styles.Active} key='1'>
				<h3 onClick={props.toggleDrawer}>Logout</h3>
			</NavLink>
		);
	}
	return (
		<div className={styles.All}>
			<div className={styles.Wrapper} style={{ display: props.drawerOpen ? "block" : "none" }}>
				<NavLink to='/' activeClassName={styles.Active} exact>
					<h3 onClick={props.toggleDrawer}>Home</h3>
				</NavLink>
				<NavLink to='/projects/null' activeClassName={styles.Active}>
					<h3 onClick={props.toggleDrawer}>Projects</h3>
				</NavLink>
				<NavLink to='/Email' activeClassName={styles.Active}>
					<h3 onClick={props.toggleDrawer}>Email</h3>
				</NavLink>
				{authOptions}
			</div>
			<Backdrop zIndex={50} show={props.drawerOpen} onClickHandler={props.toggleDrawer} />
		</div>
	);
};
const stateToProps = (state) => {
	return { token: state.authReducer.token };
};
export default connect(stateToProps)(DrawerOptions);
