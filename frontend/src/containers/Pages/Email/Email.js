import React, { Component } from "react";
import axios from "axios";

import styles from "./EmailForm.module.css";
import Loader from "../../../components/UI/Loader";
import { BASE_REQ_URL } from "../../../textConstants";
class Email extends Component {
	state = {
		emailData: {
			senderName: "",
			senderEmail: "",
			emailBody: ""
		},
		loading: false
	};
	onNameChange = (e) => {
		const newState = { ...this.state };
		newState.emailData.senderName = e.target.value;
		this.setState(newState);
	};
	onEmailChange = (e) => {
		const newState = { ...this.state };
		newState.emailData.senderEmail = e.target.value;
		this.setState(newState);
	};
	onMessageChange = (e) => {
		const newState = { ...this.state };
		newState.emailData.emailBody = e.target.value;
		this.setState(newState);
	};
	sendEmail = (e) => {
		e.preventDefault();
		this.setState({ loading: true });

		axios
			.post(BASE_REQ_URL + "/email/send", this.state.emailData)
			.then((res) => {
				this.setState({ loading: false });

				//Server sends err msg
				if (res.data.error) alert(res.data.error);
				else alert(res.data.success);
			})
			.catch((err) => {
				this.setState({ loading: false });
				alert(err);
			})
			.finally(() => {
				this.setState({ loading: false });
				const newEmailData = {
					senderName: "",
					senderEmail: "",
					emailBody: ""
				};

				this.setState({ emailData: newEmailData });
			});
	};
	render() {
		return this.state.loading ? (
			<div>
				<br />
				<br />
				<br /> <br />
				<br />
				<br />
				<Loader />
			</div>
		) : (
			<div className={styles.Wrapper}>
				<h1 className={styles.Heading}>SEND AN EMAIL</h1>
				<form className={styles.Form} onSubmit={this.sendEmail}>
					<label>Your Name</label>
					<input
						type='text'
						required
						value={this.state.emailData.senderName}
						onChange={this.onNameChange}
					></input>
					<br />
					<label>Your Email (Optional, For Replies)</label>
					<input type='email' value={this.state.emailData.senderEmail} onChange={this.onEmailChange}></input>
					<br />
					<br />
					<label>Message</label>
					<textarea
						required
						value={this.state.emailData.emailBody}
						className={styles.TextArea}
						rows={10}
						onChange={this.onMessageChange}
					></textarea>
					<br />

					<input type='submit' value='Send Email' />
				</form>
			</div>
		);
	}
}

export default Email;
