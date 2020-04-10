import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

class UserForm extends Component {

	onSubmit(e){
		e.preventDefault()
		const node = this.refs.userName
		const userName = node.value
		this.props.setUserName(userName)
		node.value = ''
	}
	render() {
		return (
			<StyledForm onSubmit={this.onSubmit.bind(this)}>
				<div className="Form-group">
					<input 
						className="Form-control"
						placeholder="Set your name..."
						type="text"
						ref="userName"
					/>
				</div>
			</StyledForm>
		)
	}
}

export default UserForm

UserForm.propTypes = {
	setUserName: PropTypes.func.isRequired
}

const StyledForm = styled.form`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	border: 0px solid GREEN;
	.Form-group {
		.Form-control { }
	}
`