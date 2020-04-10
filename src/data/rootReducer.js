import { combineReducers } from 'redux'
import appstateReducer from './reducers/appstateReducer'
import stylesReducer from './reducers/stylesReducer'
import themesReducer from './reducers/themesReducer'

/** Todo app */
import todos from '../workspace/todoapp/reducers/todos';

export default combineReducers({
  appstateReducer: appstateReducer,
  stylesReducer: stylesReducer,
  themesReducer: themesReducer,
  todos: todos
});