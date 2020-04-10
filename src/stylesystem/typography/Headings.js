import styled from 'styled-components'
import { vpAbove } from '../utilities'

export const H1 = styled.h1`
	margin: 1rem 0rem 1rem 0rem;
	padding: 1rem 1rem 1rem 1rem;
	font-size: 2em;
	color: ${'hot' + 'pink'} !important;
	${vpAbove.medium`color: white !important;`}
	background-color: blue;
`

export const H2 = styled.h2`

`

export const H3 = styled.h3`

`

export const H4 = styled.h4`

`

export const H5 = styled.h5`

`

export const H6 = styled.h6`

`


// import React from 'react'
// import styled, { css } from 'styled-components'

// const H1 = (props) => {

// 	const StyledH1 = styled.h1`

// 	`

// 	const { children } = props
// 	return (
// 		<StyledH1>{children}</StyledH1>
// 	)
// }

// export default H1
