import React from "react";
import { render } from "react-dom"

import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";

const HomeComponent = () => {
	return (
		<div>
			<h1>Home Component</h1>
		</div>
	);
}

const SecondComponent = () => {
	return (
		<div>
			<h1>Second Component</h1>
		</div>
	);
}

const ThirdComponent = () => {
	return (
		<div>
			<h1>Third Component</h1>
		</div>
	);
}

class Routing extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/second">Second</Link>
						<a href="/third">Third</a>   							{ /* anchors reloads the whole page, while link only reloads the component in its position */}
					</nav>

					{ /* Notice the difference between this 4 different Style */}
					{ /* 
					<Route path="/" component={HomeComponent} />				// component renders		
					<Route path="/second" component={SecondComponent} />		// [CLICKS] component renders, without exact, it will render / and /second
					<Route path="/third" component={ThirdComponent} />			// component does not renders

					<Route exact path="/" component={HomeComponent} /> 			// component does not renders
					<Route path="/second" component={SecondComponent} />  		// [CLICKS] component renders. resolves the issue above
					<Route path="/third" component={ThirdComponent} />			// component does not renders

					<Switch>
						<Route path="/" component={HomeComponent} /> 			// component renders
						<Route path="/second" component={SecondComponent} />	// [CLICKS] component does not render, without exact, it will render / and /second. But with switch, only the first match will be render, which in this case it is /
						<Route path="/third" component={ThirdComponent} />		// component does not render
					</Switch>
					*/}

					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route path="/second" component={SecondComponent} />
						<Route path="/third" component={ThirdComponent} />
					</Switch>
				</div>
			</Router>
		);		
	}
}

export default Routing;

