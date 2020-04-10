import React, { Component } from 'react'
import styled from 'styled-components'

import UserWelcome from '../userwelcome/UserWelcome'
import DarkmodeToggle from '../darkmode/DarkmodeToggle'
import LogoutButton from '../logout/LogoutButton'

class UserNavigation extends Component {
	render() {
		return (
			<StyledNav className="App-usernav">
				<ul>
					<li><UserWelcome/></li>
					<li><DarkmodeToggle/></li>
					<li><LogoutButton/></li>
				</ul>
			</StyledNav>
		)
	}
}

export default UserNavigation

const StyledNav = styled.nav`
	ul {
		li {
			a {
				color: ${props => props.theme.AppGlobal.anchorColor};
				&:hover { color: ${props => props.theme.AppGlobal.anchorColorHover}; }
			}
		}
	}
`