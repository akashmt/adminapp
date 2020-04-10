import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

class Channel extends Component {

	onClick(e) {
		e.preventDefault();
		const { channel, setChannel } = this.props
		setChannel(channel)
	}

	render(){
		const { channel, activeChannel } = this.props
		const active = (channel === activeChannel) ? 'active' : ''
		return (
			<StyledLI>
				<a href onClick={this.onClick.bind(this)} className={active}>
					{channel.name}
				</a>
			</StyledLI>
		)
	}
}

export default Channel

Channel.propTypes = {
	channel: PropTypes.object.isRequired,
	setChannel: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
}

const StyledLI = styled.li`
	margin: 0rem 0rem 1rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	a {
		display: block;
		margin: 0rem 0rem 0rem 0rem;
		padding: .4rem .4rem .4rem .4rem;
		width: 100%;
		cursor: pointer;
		background-color: lightgray;
		&.active { background-color: GREEN; }
		font-weight: bold;
		&:hover {

		}
	}
`