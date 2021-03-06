/*This dictates general layout (navbar placement) and is responsible for handling all routes in the app */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Drawer from "../../components/Navigation/Drawer/Drawer";

import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/AdminAuth/Login";
import Logout from "../Pages/AdminAuth/Logout";
import Email from "../Pages/Email/Email";
import Editor from "../Pages/ProjEditor/Editor";
import FPageEditor from "../Pages/FPageEditor/FPageEditor";
import ProjViewer from "../Pages/ProjViewer/ProjViewer";
import MessagePage from "../../components/UI/MessagePage";
class Layout extends Component {
	render() {
		return (
			<div className={styles.All}>
				<div>
					<Navbar />
					<Drawer />
				</div>
				<div className={styles.Body}>
					<Switch>
						<Route path='/' exact component={Landing} />
						<Route path='/email' exact component={Email} />
						<Route path='/login' exact component={Login} />
						<Route path='/editfpage' component={FPageEditor} />
						<Route path='/editproj' exact component={Editor} />
						<Route path='/logout' exact component={Logout} />
						<Route path='/projects/:projID' component={ProjViewer} />
						<Route path='/projects/' component={ProjViewer} />
						<Route
							path='/unauthorized'
							exact
							render={(props) => (
								<MessagePage message='You are not authorized to access this route!!!'></MessagePage>
							)}
						/>
						<Route
							path='/'
							render={(props) => <MessagePage message='This route does not exist.'></MessagePage>}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default Layout;
