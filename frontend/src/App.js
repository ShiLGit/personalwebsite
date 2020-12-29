import React, { Component } from "react";
import Layout from "./containers/Layout/Layout.js";
import { BrowserRouter } from "react-router-dom";

import * as actionTypes from "./redux/actions/actionTypes";
import { connect } from "react-redux";
import axios from "axios";

import Loader from "../src/components/UI/Loader";
import { BASE_REQ_URL } from "./textConstants";

class App extends Component {
	state = { loadingProj: false, loadingFPage: false };

	//only want to request this data once, hence in app compt.
	componentDidMount() {
		this.setState({ loadingProj: true, loadingFPage: true });
		axios
			.get(BASE_REQ_URL + "/projects/init")
			.then((res) => {
				this.props.initProjects(res.data.projects);
				this.setState({ loadingProj: false });
			})
			.catch((e) => {
				alert("Error initializing projects...");
				console.log(e);
			});

		axios
			.get(BASE_REQ_URL + "/fpage/getinfo")
			.then((res) => {
				this.setState({ loadingFPage: false });
				this.props.initFPage(res.data);
				console.log(this.props);
			})
			.catch((e) => {
				alert("Error initializing landing page data...");
				console.log(e);
			});
	}

	render() {
		return this.state.loadingProj || this.state.loadingFPage ? (
			<Loader />
		) : (
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		);
	}
}

const dispatchToProps = (dispatch) => {
	return {
		initProjects: (projects) => dispatch({ type: actionTypes.LOAD_PROJECTS, projects }),
		initFPage: (fpageData) => dispatch({ type: actionTypes.LOAD_FPAGEDATA, fpageData })
	};
};
const stateToProps = (state) => {
	return { projects: state.projReducer.projects, fpageData: state.fpageReducer };
};
export default connect(stateToProps, dispatchToProps)(App);
