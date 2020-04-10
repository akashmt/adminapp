import React, { Component } from 'react'

import DashAside from './aside/DashAside'
//import DashHeader from './header/DashHeader'
import DashMain from './main/DashMain'

class Dashboard extends Component {
	render() {
		return (
			<section className="Module-area">

				{/* Dashboard Aside */}
				<DashAside/>

				{/* Dashboard Header 
        <DashHeader/>
        */}

				{/* Dashboard Main */}
				<DashMain/>
				
			</section>
		)
	}
}

export default Dashboard
