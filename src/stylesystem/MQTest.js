import React from 'react'
import styled, { css } from 'styled-components'
import { mqAbove, mqBelow } from './utilities/MediaQueries'
// import { mixinFixedTop } from './Mixins'
/* ${mixinFixedTop}; <-- goes in StyedSection const */
import { H1, H2, H3 } from './base/Headings'

function MQTest() {

	const StyledSection = styled.section`
		margin: 60px 0px 60px 0px;
		padding: 15px;
		background-color: silver;
		
		h1 {
			${mqAbove.small` 	color: green; `}
			${mqAbove.medium` color: blue; `}
			${mqAbove.large` 	color: purple; `}
			${mqAbove.xlarge` color: hotpink; `}
		}
	`

	return (
		<StyledSection>
			<h1>Test Component</h1>
			<H1 type="save">Test H1 Comp</H1>
			<H1 type="cancel">Test H1 Comp</H1>
			<H2>Test H2 Comp</H2>
			<H3>Test H3 Comp</H3>
		</StyledSection>
	)
}

export default MQTest