import React, { Component } from 'react'
import styled from 'styled-components'

import AdminNavLogo from './brand/AdminNavLogo'
import AdminNavigation from './adminnav/AdminNavigation'

class AppNavPanel extends Component {
	render() {
    
		return (
			<StyledAppNavPanel className="App-navpanel">
				<AdminNavigation/>
				<AdminNavLogo/>
			</StyledAppNavPanel>
		)
	}
}

export default AppNavPanel

const StyledAppNavPanel = styled.section`
	color: ${props => props.theme.AppNavPanel.textColor};
	background-color: ${props => props.theme.AppNavPanel.backgroundColor};
	box-shadow: ${props => props.theme.AppNavPanel.boxShadowRight};
`