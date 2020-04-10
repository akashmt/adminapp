import { GET_STYLES } from '../actions/stylesConsts'

const initialState = {
  styles: {},
  styleslight: {
    AppGlobal: {},
    AppNavPanel: {},
    AppHeader: {},
    AppsHeader: {},
    Modules: {},
    AppForms: {}
  },
  stylesdark: {
    AppGlobal: {},
    AppNavPanel: {},
    AppHeader: {},
    AppsHeader: {},
    Modules: {},
    AppForms: {}
  }
  
}

export default function(state = initialState, action) {

  switch(action.type) {

		case GET_STYLES:
			return {
				...state,
        styles: action.payload,
        styleslight: action.payload.light,
        stylesdark: action.payload.dark,
			}

		default:
			return state;

  }
}