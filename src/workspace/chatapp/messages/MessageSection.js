import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class MessageSection extends Component {
	render() {
		return (
			<StyledSection className="Message-section">
				<div className="Message-heading">
					<h2>Messages</h2>
				</div>
				<div className="Messages">
					<MessageList {...this.props} />
					<MessageForm {...this.props} />
				</div>
			</StyledSection>
		)
	}
}

export default MessageSection

MessageSection.propTypes = {
	messages: PropTypes.array.isRequired,
	activeChannel: PropTypes.object.isRequired,
	addMessage: PropTypes.func.isRequired
}

const StyledSection = styled.section`

`