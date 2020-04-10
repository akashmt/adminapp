import React, { Component } from 'react'

import MenuGroupTitle from './title/MenuGroupTitle'
import MenuGroupItems from './items/MenuGroupItems'

class MenuGroup extends Component {
	render() {
		const { userdata, valState, getWorkflowValue } = this.props
		return (
			<section className="Module-menugroup">
				<MenuGroupTitle userdata={userdata} valState={valState} />
				<MenuGroupItems userdata={userdata} valState={valState} getWorkflowValue={getWorkflowValue} />
			</section>
		)
	}
}

export default MenuGroup