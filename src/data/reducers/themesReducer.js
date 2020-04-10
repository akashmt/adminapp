import { GET_THEMES } from '../actions/themesConsts'

const initialState = {
  themes: {
    light: {
      AppGlobal: {}
    }
  }
}

export default function(state = initialState, action) {

  switch(action.type) {

		case GET_THEMES:
			return {
				...state,
				themes: action.payload
			}

		default:
			return state;
  }
}