import React from 'react'
import styled from 'styled-components'

export default function CounterApp() {
	return (
		<StyledSection>
			<h1>Counter</h1>
		</StyledSection>
	)
}

const StyledSection = styled.section`
  /* background-color: ${props => props.theme.Modules.backgroundColor}; */
  padding: 15px;
`