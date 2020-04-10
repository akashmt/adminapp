import React, { useState } from 'react'
import styled from 'styled-components'

function Input({ property, index }) {
	return (
		<input type={property.type}/>
	)
}

export const InputContainer = (props) => {
	const [ properties, useProperties ] =  useState([
		{
			type: 'text',
			isDisabled: false,
			isRequired: false,
			placeholder: 'Type something'
		},
		{
			type: 'submit',
			isDisabled: false,
			isRequired: false,
			placeholder: 'Choose file'
		}
	])

	const StyledDiv = styled.div`
		
	`

	return (
		<StyledDiv>
			{properties.map((property, index) => (
				<Input key={index} property={property}/>
			))}
		</StyledDiv>
	)
}
