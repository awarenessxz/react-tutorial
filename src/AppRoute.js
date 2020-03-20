import React from "react";
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";

import App from "./App";
import ReduxApp from "./pages/ReduxApp"

class AppRoute extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav class="App-Nav">
						<Link to="/">App</Link>
						<Link to="/Redux">Redux</Link>  
					</nav>


					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/Redux" component={ReduxApp} />
					</Switch>
				</div>
			</Router>
		);		
	}
}

export default AppRoute;