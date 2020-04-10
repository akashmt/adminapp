import { GET_TODO,ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'
import undoable, { includeAction } from 'redux-undo'

const initialState = []


let todos = (state = initialState, action) => {
  
  switch (action.type) {

    case GET_TODO:
      return action.payload;


    case ADD_TODO:
      return action.payload;


    case DELETE_TODO:
      return action.payload;


    case EDIT_TODO:
      return action.payload;


    case COMPLETE_TODO:
      return action.payload;


    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo, completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
todos = undoable(todos, { filter: includeAction([GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED]) })

export default todos