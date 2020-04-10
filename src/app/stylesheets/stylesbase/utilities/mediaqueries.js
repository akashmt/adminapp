// import { createGlobalStyle, css  }  from 'styled-components';
// import { mediaqueries } from './utilities/mediaqueries.js'

// *** Import to other Stylesbase Files * 
// import { mediaqueries } from '../utilities/mediaqueries'
// h1 {
// 	${mediaqueries.vpsmall`color: purple;`}
// 	${mediaqueries.vpmedium`color: orange;`}
// 	${mediaqueries.vplarge`color: pink;`}
// 	${mediaqueries.vpxlarge`color: black;`}
// }

import { css } from 'styled-components'

const viewports = {
	vpsmall: 576,
	vpmedium: 768,
	vplarge: 992,
	vpxlarge: 1200
}

export const mediaqueries = Object.keys(viewports).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${viewports[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc;
}, {})