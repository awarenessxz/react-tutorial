import React, { useState } from "react";
import { connect } from "react-redux"
import { buyCake } from "../"

const CakeContainer = (props) => {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<h2>Number of cakes = {props.numOfCakesProp}</h2>
			<input type="text" value={number} onChange={e => setNumber(e.target.value)} />
			<button onClick={() => props.buyCakeProps(number)}>Buy {number} Cakes</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfCakesProp: state.cake.numOfCakes 		// state.cake (refer to rootreducer)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyCakeProps: (number) => dispatch(buyCake(number))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);