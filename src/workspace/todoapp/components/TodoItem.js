import React, { useState } from 'react'
import classnames from 'classnames'
import * as TodoActions from '../actions'
import { useDispatch } from 'react-redux'
import TodoTextInput from './TodoTextInput'

const TodoItem = (props) => {

  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    setEditing({ editing: true })
  }

  const handleSave = (id, text) => {
    if (text.length === 0) {
      dispatch(TodoActions.deleteTodo(id))
    } else {
      dispatch(TodoActions.editTodo(id, text))
    }
    setEditing({ editing: false })
  }

 
    const { todo } = props

    let element
    if (editing) {
      element = (
        <TodoTextInput text={todo.text}
          editing={editing}
          onSave={(text) => handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() =>  dispatch(TodoActions.completeTodo(todo.id,todo.completed))} />
          <label onDoubleClick={handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
            onClick={() =>  dispatch(TodoActions.deleteTodo(todo.id))} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: editing
      })}>
        {element}
      </li>
    )
  
}

export default TodoItem
