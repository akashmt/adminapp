import React, { Component } from 'react'
import IconEllipsisV from '../../../../../app/icons/menu/IconEllipsisV'

class MenuGroupTitle extends Component {
	render() {
		return (
			<div className="Module-menugrouptitle">
        <h4><IconEllipsisV/><span>Module Name</span></h4>
			</div>
		)
	}
}

export default MenuGroupTitle