import React, { Component } from 'react'
import styled from 'styled-components'

import IconPowerOff from '../../../app/icons/auth/IconPowerOff'

class LogoutButton extends Component {
	render() {
		return (
			<StyledAnchor className="btn btn-icon" href="/">
				<IconPowerOff/><span>Logout</span>
			</StyledAnchor>
		)
	}
}

export default LogoutButton

const StyledAnchor = styled.a`
	background-color: ${props => props.theme.AppHeader.logoutButtonBGColor} !important;
	border: ${props => props.theme.AppHeader.logoutButtonBorderColor} !important;
	svg#icon-power-off { 
		fill: ${props => props.theme.AppHeader.logoutButtonIconColor} !important; 
	}
	span { 
		color: ${props => props.theme.AppHeader.logoutButtonTextColor} !important;
	}
	&:hover { 
		svg#icon-power-off { 
			fill: ${props => props.theme.AppHeader.logoutButtonIconColorHover} !important;
		}
		background-color: ${props => props.theme.AppHeader.logoutButtonBGColorHover} !important;
		border: ${props => props.theme.AppHeader.logoutButtonBorderColorHover} !important;
	}
`