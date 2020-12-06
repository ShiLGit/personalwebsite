import React from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = (props) => {
	let extras = [];
	if (props.token) {
		//if logged in, add extra routes to navbar
		extras = [
			<NavLink to='/editfpage' activeClassName={styles.Active} key='3'>
				<h3 onClick={props.toggleDrawer}>Edit Front Page</h3>
			</NavLink>,

			<NavLink to='/editproj' key='2' activeClassName={styles.Active}>
				<h3>Edit Projects</h3>
			</NavLink>,

			<NavLink to='/logout' key='1' activeClassName={styles.Active}>
				<h3>Logout</h3>
			</NavLink>
		];
	}
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Navbar}>
				<NavLink to='/' activeClassName={styles.Active} exact>
					<h3>Home</h3>
				</NavLink>
				<NavLink to={"/projects/" + null} activeClassName={styles.Active}>
					<h3>Coding Projects</h3>
				</NavLink>
				<NavLink to='/email' activeClassName={styles.Active}>
					<h3>Email</h3>
				</NavLink>
				{extras}
			</div>
		</div>
	);
};
const stateToProps = (state) => {
	return { token: state.authReducer.token };
};
export default connect(stateToProps)(Navbar);
