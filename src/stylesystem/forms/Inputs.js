//import React from 'react'
import styled from 'styled-components'
import { PURPLE, SOCIAL } from '../consts'

export const Input = styled.input`
	padding: 15px;
	border: none !important;
	background-color: ${PURPLE} !important;
`

export const InputSubmit = styled(Input)`
	background-color: ${SOCIAL.twitter} !important;
`

export const InputCancel = styled(Input)`
	background-color: ${SOCIAL.facebook} !important;
`
