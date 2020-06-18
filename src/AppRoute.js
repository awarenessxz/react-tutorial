import React from "react";
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";

import App from "./App";
import ReduxApp from "./containers/ReduxApp";
import Basic from "./containers/Basic";

class AppRoute extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav class="App-Nav">
						<Link to="/">Home</Link>
						<Link to="/Basic">Basic</Link>
						<Link to="/Redux">Redux</Link>  
					</nav>


					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/Basic" component={Basic} />
						<Route path="/Redux" component={ReduxApp} />
					</Switch>
				</div>
			</Router>
		);		
	}
}

export default AppRoute;