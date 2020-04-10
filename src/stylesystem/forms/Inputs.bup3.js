import React from 'react'
import styled from 'styled-components'

export const Input = (props) => {

	const StyledInput = styled.input`
		background-color: purple !important;
	`

	const { children } = props
	return (
		<StyledInput>{children}</StyledInput>
	)
}

export const InputCanel = (props) => {

	const StyledInputCancel = styled(Input)`
		background-color: green !important;
	`

	const { children } = props
	return (
		<StyledInputCancel>{children}</StyledInputCancel>
	)
}