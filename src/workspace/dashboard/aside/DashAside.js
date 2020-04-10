import React, { Component } from 'react'

import MenuGroup from './menugroup/MenuGroup'

class DashAside extends Component {
	render() {
		const { userdata, valState, getWorkflowValue } = this.props
		return (
			<aside className="Module-aside">

				{/*** Dashboard Items */}
				<MenuGroup userdata={userdata} valState={valState} getWorkflowValue={getWorkflowValue} />
				
			</aside>
		)
	}
}

export default DashAside