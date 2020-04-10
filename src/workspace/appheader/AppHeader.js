import React, { Component } from 'react'
import styled from 'styled-components'

import TriggerAppNavPanel from './appnavpanel/TriggerAppNavPanel'
import HeaderBrand from './brand/HeaderBrand'
import HeaderNavigation from './navigation/HeaderNavigation'
import UserNavigation from './navigation/UserNavigation'

class AppHeader extends Component {
	render() {
		return (
			<StyledAppHeader className="App-header">
				<TriggerAppNavPanel/>
				<HeaderBrand/>
				<HeaderNavigation/>
				<UserNavigation/>
			</StyledAppHeader>
		)
	}
}

export default AppHeader

const StyledAppHeader = styled.header`
	z-index: 2;
	color: ${props => props.theme.AppHeader.textColor};
	border-bottom: ${props => props.theme.AppHeader.borderBottom};
	background-color: ${props => props.theme.AppHeader.backgroundColor};
	box-shadow: ${props => props.theme.AppHeader.boxShadow};
`
