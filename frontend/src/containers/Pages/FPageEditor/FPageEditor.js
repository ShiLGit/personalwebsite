import React, { Component } from "react";
import { connect } from "react-redux";
import formStyle from "../FormStyles.module.css";
import { Redirect } from "react-router-dom";

class FPageEditor extends Component {
	state = {
		webDevTS: "",
		schoolTS: "",
		otherTS: "",
		bio: ""
	};
	changeStateField = (e, field) => {
		const stateUpdate = {};
		stateUpdate[field] = e.target.value;
		this.setState(stateUpdate);
	};
	submitHandler = () => {};
	render() {
		//let toRender = <Redirect to='unauthorized' />;
		let toRender;
		if (1)
			toRender = (
				<>
					<form className={formStyle.Form} style={{ marginTop: "80px" }}>
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
						<input
							type='textarea'
							value={this.state.bio}
							onChange={(e) => {
								this.changeStateField(e, "bio");
							}}
							required
						></input>

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
		projects: state.projReducer.projects
	};
};
export default connect(stateToProps)(FPageEditor);
