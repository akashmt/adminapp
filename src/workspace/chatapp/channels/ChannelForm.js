import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

class ChannelForm extends Component {

	onSubmit(e){
		e.preventDefault()
		const node = this.refs.channel
		const channelName = node.value
		this.props.addChannel(channelName)
		node.value = ''
	}
	render() {
		return (
			<StyledForm onSubmit={this.onSubmit.bind(this)}>
				<div className="Form-group">
					<input 
						className="Form-control"
						placeholder="Add Channel"
						type="text"
						ref="channel"
					/>
				</div>
			</StyledForm>
		)
	}
}

export default ChannelForm

ChannelForm.propTypes = {
	addChannel: PropTypes.func.isRequired
}

const StyledForm = styled.form`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	border: 0px solid GREEN;
	.Form-group {
		.Form-control { }
	}
	input {
		width: 100%;
	}
`