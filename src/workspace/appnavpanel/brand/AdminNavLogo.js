import React, { Component } from 'react'
import styled from 'styled-components'

import LogoJivasoft from '../../../app/icons/brand/jivasoft/LogoJivasoft'

class AdminNavLogo extends Component {
	render() {
		return (
			<StyledFigure className="App-AdminNavlogo">
				<a href="/">
					<LogoJivasoft/>
				</a>
			</StyledFigure>
		)
	}
}

export default AdminNavLogo

const StyledFigure = styled.figure`
	background-color: ${props => props.theme.AppNavPanel.appNavLogoBGColor};
	svg#logo-jivasoft { fill: ${props => props.theme.AppNavPanel.appNavLogoFill}; }
	a { color: ${props => props.theme.AppGlobal.anchorColor}; }
	&:hover {
		background-color: ${props => props.theme.AppNavPanel.backgroundColor};
		box-shadow: ${props => props.theme.AppNavPanel.boxShadowHover};
		a { 
			color: ${props => props.theme.AppGlobal.anchorColorHover};
		}
	}
`
