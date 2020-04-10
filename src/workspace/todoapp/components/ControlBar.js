import React, { Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import UndoRedo from '../containers/UndoRedo';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class ControlBar extends Component {

  renderTodoCount() {
    const { activeCount } = this.props
    return (
      <span className="todo-count">
        Undone: {activeCount || '0 '}
      </span>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props
    return (
      <a href className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
          onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }
  renderProgress() {
    const { activeCount, deactiveCount } = this.props
    let progress = (deactiveCount - activeCount) / deactiveCount * 100
    let red = Math.floor(185 - 1.43 * progress),
      green = Math.floor(123 + 0.52 * progress),
      blue = Math.floor(123 - 0.10 * progress);
    return (
      <div className="progress">
        <div className="progress-bar"
          style={{
            width: (progress + '%'),
            background: 'rgb(' + red + ', ' + green + ', ' + blue + ')'
          }} >
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="control-bar">
        {this.renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        <UndoRedo />
        {this.renderClearButton()}
        <br />
        {this.renderProgress()}
      </section>
    )
  }
}
