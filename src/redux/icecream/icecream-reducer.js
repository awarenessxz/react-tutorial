import { BUY_ICECREAM } from "./icecream-type"

// (previousState, action) => newState

const initialState = {
	numOfIcecreams: 10
}

export const icecreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state, 
				numOfIcecreams: state.numOfIcecreams - 1
			}
		default:
			return state
	}
}