import React, { Component } from 'react'

import DashBreadcrumb from './breadcrumb/DashBreadcrumb'
import DashName from './dashname/DashName'

export default class DashHeader extends Component {
	render() {
		
		return (
			<header className="Module-header">

				{/*** Dashboard Name */}
				<DashName />

				{/*** Dashboard Breadcrumb */}
				<DashBreadcrumb />

			</header>
		)
	}
}
