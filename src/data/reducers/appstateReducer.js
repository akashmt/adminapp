const GET_THEME_VAL = 'GET_THEME_VAL';
const GET_MODULE_VAL = 'GET_MODULE_VAL';
const GET_MODULEAPP_VAL = 'GET_MODULEAPP_VAL';

const initialState = {
  theme: false,
  valModule: '',
  valModuleapp: ''
}

export default function(state = initialState, action = {}) {

  switch(action.type) {
    case GET_THEME_VAL:
      return {
        ...state,
        theme: action._value,
      }
    case GET_MODULE_VAL:
			return {
				...state,
        valModule: action._value,
        valModuleapp: '',
        valWorkflow: '',
        valAgency: ''
      }
    case GET_MODULEAPP_VAL:
      return {
        ...state,
        valModuleapp: action._value,
      }

		default:
			return state;

  }
}