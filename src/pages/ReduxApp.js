import React from "react";
import { Provider } from "react-redux";

import configureStore from "../redux/configureStore"

import CakeContainer from "../redux/containers/CakeContainer";
import IceCreamContainer from "../redux/containers/IceCreamContainer";

const store = configureStore()

class ReduxApp extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div> 
					<h1>Redux Demo</h1>
					<CakeContainer />
					<IceCreamContainer />
				</div>
			</Provider>
		);
	}
} 

export default ReduxApp;