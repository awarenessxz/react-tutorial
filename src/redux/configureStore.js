import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

import logger from "redux-logger"

const configureStore = () => {
	const middlewares = [
		logger,
		thunkMiddleware
	];

	const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
	return store;
}

export default configureStore;