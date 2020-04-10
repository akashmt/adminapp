import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

class HeaderNavigation extends Component {
	render() {
		return (
			<StyledNav className="App-headernav">
				<ul>
					<li><NavLink exact to="/">Dashboard</NavLink></li>
					<li><NavLink exact to="/docs">Docs</NavLink></li>
					<li><NavLink exact to="/support">Support</NavLink></li>
				</ul>
			</StyledNav>
		)
	}
}

export default HeaderNavigation

const StyledNav = styled.nav`
	ul {
		li {
			a {
				text-transform: uppercase;
				color: ${props => props.theme.AppHeader.anchorColor};
				&:hover { color: ${props => props.theme.AppHeader.anchorColorHover}; }
			}
		}
	}
`
