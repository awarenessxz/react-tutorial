import React from "react";
import { connect } from "react-redux"
import { buyIcecream } from "../"

const IcecreamContainer = (props) => {
	return (
		<div>
			<h2>Number of Ice Cream = {props.numOfIcecreamProp}</h2>
			<h3>States from Other Component: {props.numOfCakeProps}</h3>
			<button onClick={props.buyIcecreamProps}>Buy Ice cream</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfIcecreamProp: state.icecream.numOfIcecreams, 		// state.icecream (refer to rootreducer)
		numOfCakeProps: state.cake.numOfCakes
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyIcecreamProps: () => dispatch(buyIcecream())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);