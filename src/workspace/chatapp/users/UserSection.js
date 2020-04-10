import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import UserForm from './UserForm'
import UserList from './UserList'

class UserSection extends Component {
	render() {
		return (
			<StyledSection className="User-section">
				<div className="User-heading">
					<h2>Users</h2>
				</div>
				<div className="Users">
					<UserList {...this.props} />
					<UserForm {...this.props} />
				</div>
			</StyledSection>
		)
	}
}

export default UserSection

UserSection.propTypes = {
	users: PropTypes.array.isRequired,
	setUserName: PropTypes.func.isRequired
}

const StyledSection = styled.section`

`