import React from 'react'
import styled from 'styled-components'

export const Textarea = (props) => {

	const StyledTextarea = styled.textarea`
		
	`

	const { children } = props
	return (
		<StyledTextarea>{children}</StyledTextarea>
	)
}