import React, { Component } from "react";
import { connect } from "react-redux";
import formStyle from "../FormStyles.module.css";
import { Redirect } from "react-router-dom";

class FPageEditor extends Component {
	render() {
		let toRender = <Redirect to='unauthorized' />;
		if (this.props.token)
			toRender = (
				<>
					<form className={formStyle.Form} style={{ marginTop: "80px" }}>
						<h1>Edit Front Page</h1>
						<label className={formStyle.InputLabel}>Tech Stack: Web Dev</label>
						<input type='text'></input>

						<label className={formStyle.InputLabel}>Tech Stack: School</label>
						<input type='text'></input>

						<label className={formStyle.InputLabel}>Tech Stack: Other</label>
						<input type='text'></input>

						<label className={formStyle.InputLabel}>Bio</label>
						<input type='text'></input>

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
