import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

class User extends Component {
	render() {
		return (
			<StyledLI>
				{this.props.user.name}
			</StyledLI>
		)
	}
}

export default User

User.propTypes = {
	user: PropTypes.object.isRequired
}

const StyledLI = styled.li`

`
