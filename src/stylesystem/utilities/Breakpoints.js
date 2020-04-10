import { css } from 'styled-components'

const mediaquery = {
	xsmall: 320,
	small: 560,
	medium: 960,
	large: 1140,
	xlarge: 1400
}

// acc = accumulator
export const vpAbove = Object.keys(mediaquery).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${mediaquery[label]}px) {
			${css(...args)}
		}
	`
	return acc;
}, {})

export const vpBelow = Object.keys(mediaquery).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${mediaquery[label]}px) {
			${css(...args)}
		}
	`
	return acc;
}, {})