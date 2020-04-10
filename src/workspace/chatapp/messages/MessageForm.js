import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

class MessageForm extends Component {

	onSubmit(e){
		e.preventDefault()
		const node = this.refs.message
		const message = node.value
		this.props.addMessage(message)
		node.value = ''
	}
	render() {
		let input
		if (this.props.activeChannel.name !== undefined) {
			input = (
				<input
						ref='message'
						type='text'
						className='form-control'
						placeholder='Add Message...'
				/>
			)
		}
		return (
			<StyledForm onSubmit={this.onSubmit.bind(this)}>
				<div className="Form-group">
					{input}
				</div>
			</StyledForm>
		)
	}
}

export default MessageForm

MessageForm.propTypes = {
	activeChannel: PropTypes.object.isRequired,
	addMessage: PropTypes.func.isRequired
}

const StyledForm = styled.form`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	border: 0px solid GREEN;
	.Form-group {
		.Form-control { }
	}
`