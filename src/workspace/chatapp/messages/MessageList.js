import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
import Message from './Message'

class MessageList extends Component {
	render() {
		const { messages } = this.props
		return (
			<StyledUL>
				{messages.map( (message, index) => {
					return (
						<Message key={index} message={message} />
					)
				})}
			</StyledUL>
		)
	}
}

export default MessageList

MessageList.propTypes = {
	messages: PropTypes.array.isRequired
}

const StyledUL = styled.ul`

`
