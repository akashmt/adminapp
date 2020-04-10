import React from 'react'
import { useDispatch } from 'react-redux'
import TodoTextInput from './TodoTextInput'
import * as TodoActions from '../actions'

const Header = (props) => {

  const dispatch = useDispatch();

  const handleSave = (text) => {
    if (text.length !== 0) {
      dispatch(TodoActions.addTodo(text))
    }
  }

 
  return (
    <header className="header">
      <h1>To-Do List</h1>
      <TodoTextInput newTodo
        onSave={handleSave}
        placeholder="Enter task" />
    </header>
  )
  
}

export default Header
