import React from 'react'
import styled from 'styled-components'
import { SOCIAL, ELEVATION } from '../consts'

// const Header = () => (
// 	<header>
// 		<h1>Hello!</h1>
// 	</header>
// )

const Header = ({ className }) => (
	<header className={className}>
		<h1>Hello!</h1>
	</header>
)

export default styled(Header)`
	margin: 0rem 0rem 1rem 0rem !important;
	padding: .5rem !important;
	background-color: ${SOCIAL.facebook};
	${ELEVATION[1]};
	h1 {
		margin: 0rem 0rem 0rem 0rem !important;
		padding: 0rem 0rem 0rem 0rem !important;
		color: white !important;
	}
`