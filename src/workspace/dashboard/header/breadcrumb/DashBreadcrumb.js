import React, { Component } from 'react'

import IconTachometer from '../../../../app/icons/menu/IconTachometer'
import IconAngleDoubleRightLight from '../../../../app/icons/direction/IconAngleDoubleRightLight'

class DashBreadcrumb extends Component {
	render() {
		return (
			<nav className="Module-breadcrumb">
				<ul>
					<li>
						<a href="/">
							<IconTachometer/>
							<span>Dashboard</span>
						</a>
					</li>
					<li>
						<a href="/">
							<IconAngleDoubleRightLight/>
							<span>Onduty Module1</span>
						</a>
					</li>
					<li>
						<a href="/">
							<IconAngleDoubleRightLight/>
							<span>Workflow</span>
						</a>
					</li>
					<li>
						<a href="/">
							<IconAngleDoubleRightLight/>
							<span>Step1</span>
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default DashBreadcrumb
