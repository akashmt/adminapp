import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import IconBars from '../../../app/icons/toggle/IconBars'

class TriggerAppNavPanel extends Component {

  handleClick(event) {
    event.preventDefault()
    const wrapper = document.getElementById('workspace-screen');
    wrapper.classList.toggle('is-side-open');
    wrapper.classList.remove('is-submodule-open');
    wrapper.classList.remove('is-submodule-selected');
	}
	
	render() {
		return (
			<StyledSection className="App-triggeradminpanel">
				<Link to="/" onClick={this.handleClick}>
					<IconBars/>
				</Link>
			</StyledSection>
		)
	}
	
} 

export default TriggerAppNavPanel

const StyledSection = styled.section`
	a {
		svg#icon-bars { fill: ${props => props.theme.AppHeader.triggerIconFill}; }
		&:hover {
			svg#icon-bars { fill: ${props => props.theme.AppHeader.triggerIconFillHover}; }
		}
	}
`