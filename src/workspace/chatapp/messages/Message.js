import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
//import fecha from 'fecha'

class Message extends Component {
	render(){
		let { message } = this.props
		//let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY')
		return (
			<StyledLI>
				<div className="author">
					<strong>{message.author}</strong>
					{/* <i className="timestamp">{createdAt}</i> */}
				</div>
				<div className="body">{message.body}</div>
			</StyledLI>
		)
	}
}

export default Message

Message.propTypes = {
	message: PropTypes.object.isRequired
}

const StyledLI = styled.li`

`