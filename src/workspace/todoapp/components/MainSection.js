import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as TodoActions from '../actions'
import TodoItem from './TodoItem'
import ControlBar from './ControlBar'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

const MainSection = (props) => {

  
  const [filter, setFilter] = useState(SHOW_ALL);

  const dispatch = useDispatch();
	useEffect(() => {
    dispatch(TodoActions.getTodos())
  },[dispatch])

  const todos = useSelector(state => state.todos)
  console.log(todos)

  const handleClearCompleted = () => {
    dispatch(TodoActions.clearCompleted())
  }

  const handleShow = (filterval) => {
    setFilter(filterval)
  }

  const renderToggleAll = (completedCount) => {
    
    if (todos.present.length > 0) {
      return (
        <span>
          <input className="toggle-all"
            type="checkbox"
            defaultChecked={completedCount === todos.present.length}
          />
          <label onClick={TodoActions.completeAll()} />
        </span>
      )
    }
  }

  const renderControlBar = (completedCount) => {
    const activeCount = todos.present.length - completedCount
    const deactiveCount = todos.present.length

    if (todos.present.length) {
      return (
        <ControlBar 
          completedCount={completedCount}
          activeCount={activeCount}
          deactiveCount={deactiveCount}
          filter={filter}
          onClearCompleted={handleClearCompleted}
          onShow={handleShow} />
      )
    }
  }


  
  const filteredTodos = todos.present.filter(TODO_FILTERS[filter])
 
  const completedCount = todos.present.reduce((count, todo) =>
    todo.completed ? count + 1 : count,
    0
  )

  return (
    <section className="main">
      {renderToggleAll(completedCount)}
      {renderControlBar(completedCount)}
      <ul className="todo-list">
        {filteredTodos.map(todo =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
    </section>
  )
  
}

export default MainSection
