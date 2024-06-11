import { ACTION_TYPE } from './actions'
import { emptyField } from './utils/empty-field'


const initialState = {
	field: emptyField,
	currentPlayer: 'X',
	win: false,
	draw: false,
}

export const reducer = (state = initialState, {type, payload} ) => {
	switch (type) {
		case ACTION_TYPE.SET_CURRENTPLAYER:
			return {
				...state,
				currentPlayer: payload,
			}

		case ACTION_TYPE.SET_FIELD:
			return {
				...state,
				field: payload
			}

		case ACTION_TYPE.SET_DRAW:
			return {
				...state,
				draw: payload
			}

		case ACTION_TYPE.SET_WIN:
			return {
				...state,
				win: payload
			}

		case ACTION_TYPE.RESET_GAME:
			return initialState


		default:
			return state
	}
}
