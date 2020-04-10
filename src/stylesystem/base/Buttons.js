import styled from 'styled-components'
// import { fixedTop } from '../utilities
// ${fixedTop}

/* background-color: ${props => type === 'cancel' ? 'tomato' : 'indigo'}; */

const COLOR = 'white'

export const Button = styled.button`
	margin: 0rem 0rem .2rem 0rem;
	padding: .2rem .5rem;
	font-size: 1rem;
	color: ${COLOR};
	border: none !important;
	border-radius: 4px;
	background-color: ${({ type }) => (
		type === 'cancel' ? 'red' : 'indigo'
	)} !important;
`

export const ButtonAlt = styled.button`

`

export const ButtonCancel = styled(Button)`
	background-color: tomato;
`