import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

import formStyle from "../FormStyles.module.css";
import { BASE_REQ_URL } from "../../../textConstants";
class FPageEditor extends Component {
	state = {
		webDevTS: this.props.fpageData.webDevTS ? this.props.fpageData.webDevTS : "",
		schoolTS: this.props.fpageData.schoolTS ? this.props.fpageData.schoolTS : "",
		otherTS: this.props.fpageData.otherTS ? this.props.fpageData.otherTS : "",
		bio: this.props.fpageData.bio ? this.props.fpageData.bio : ""
	};
	changeStateField = (e, field) => {
		const stateUpdate = { ...this.state };
		stateUpdate[field] = e.target.value;
		this.setState(stateUpdate);
	};
	submitHandler = (e) => {
		e.preventDefault();
		axios
			.post(BASE_REQ_URL + "/fpage/setinfo", this.state, {
				headers: { Authorization: `${this.props.token}` }
			})
			.then((res) => {
				if (res.data.success) {
					alert(res.data.success + "\nRefresh page to see updates. I WAS TOO LAZY TO CODE UPDATE IN!!!");
					this.setState({
						webDevTS: "",
						schoolTS: "",
						otherTS: "",
						bio: ""
					});
				} else alert("Error: " + res.data.error);
			})
			.catch((e) => {
				alert(e);
			});
	};
	render() {
		let toRender = <Redirect to='unauthorized' />;
		if (this.props.token)
			toRender = (
				<>
					<form className={formStyle.Form} style={{ marginTop: "80px" }} onSubmit={this.submitHandler}>
						<h1>Edit Front Page</h1>
						<label className={formStyle.InputLabel}>Tech Stack: Web Dev</label>
						<input
							type='text'
							value={this.state.webDevTS}
							onChange={(e) => {
								this.changeStateField(e, "webDevTS");
							}}
							required
						></input>

						<label className={formStyle.InputLabel}>Tech Stack: School</label>
						<input
							type='text'
							value={this.state.schoolTS}
							onChange={(e) => {
								this.changeStateField(e, "schoolTS");
							}}
							required
						></input>

						<label className={formStyle.InputLabel}>Tech Stack: Other</label>
						<input
							type='text'
							value={this.state.otherTS}
							onChange={(e) => {
								this.changeStateField(e, "otherTS");
							}}
							required
						></input>
						<br />
						<label>Bio</label>
						<textarea
							type='textarea'
							rows={5}
							value={this.state.bio}
							onChange={(e) => {
								this.changeStateField(e, "bio");
							}}
							required
						></textarea>

						<input type='submit' value='Save'></input>
					</form>
				</>
			);
		return toRender;
	}
}

const stateToProps = (state) => {
	return {
		token: state.authReducer.token,
		projects: state.projReducer.projects,
		fpageData: state.fpageReducer
	};
};
export default connect(stateToProps)(FPageEditor);
