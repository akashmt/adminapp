import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
import User from './User'

class UserList extends Component {
	render() {
		const { users } = this.props
		return (
			<StyledUL>
				{users.map( (user, index) => {
					return (
						<User key={index} user={user} />
					)
				})}
			</StyledUL>
		)
	}
}

export default UserList

UserList.propTypes = {
	users: PropTypes.array.isRequired
}

const StyledUL = styled.ul`

`
