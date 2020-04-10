import React, { Component } from 'react'
import styled from 'styled-components'

import IconUserCircle from '../../../app/icons/user/IconUserCircle'

class UserWelcome extends Component {
	render() {
		return (
			<StyledDiv className="User-welcome">
				<a href="/"><IconUserCircle/></a>
				<div className="user-text">
					<small>Welcome..</small>
					<span><a href="/">Dan Ryan</a></span>
				</div>
			</StyledDiv>
		)
	}
}

export default UserWelcome

const StyledDiv = styled.div`
	a {
		svg#icon-user-circle { fill: ${props => props.theme.AppHeader.brandIconFill}; }
		&:hover { 
			svg#icon-user-circle { fill: ${props => props.theme.AppHeader.brandTextFill}; }
		}
	}
	div.user-text {
		small { }
		span { 
			a {
				color: ${props => props.theme.AppHeader.userAnchorColor};
				&:hover { color: ${props => props.theme.AppHeader.userAnchorColorHover}; }
			}
		}
	}

`