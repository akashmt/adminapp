import { createGlobalStyle  }  from 'styled-components'

import { 
	FORMELEMENT_MARGIN, FORMELEMENT_PADDING, FORMELEMENT_HEIGHT,
	FORMELEMENT_FONT_COLOR, FORMELEMENT_FONT_TEXTTRANSFORM,
	FORMELEMENT_BORDER_WIDTH, FORMELEMENT_BORDER_RADIUS, FORMELEMENT_BORDER_COLOR,
	FORMELEMENT_BORDER_COLOR_TRANSITION, FORMELEMENT_BORDER_STYLE, FORMELEMENT_BORDER_IMAGE,
	FORMELEMENT_BACKGROUND_COLOR, FORMELEMENT_BACKGROUND_POSITION,
	FORMELEMENT_BACKGROUND_REPEAT
} from '../consts/globalconsts'

export const FormSelect = createGlobalStyle`
	/*** Global Styles */
	select {
		margin: ${FORMELEMENT_MARGIN};
		padding: ${FORMELEMENT_PADDING};
		height: ${FORMELEMENT_HEIGHT};
		-webkit-appearance: none;
		box-sizing: border-box;
		outline: none;
			color: ${FORMELEMENT_FONT_COLOR};
			text-transform: ${FORMELEMENT_FONT_TEXTTRANSFORM};
			border-width: ${FORMELEMENT_BORDER_WIDTH};
			border-radius: ${FORMELEMENT_BORDER_RADIUS};
			border-color: ${FORMELEMENT_BORDER_COLOR};
			transition: ${FORMELEMENT_BORDER_COLOR_TRANSITION};
			border-style: ${FORMELEMENT_BORDER_STYLE};
			border-image: ${FORMELEMENT_BORDER_IMAGE};
			background-color: ${FORMELEMENT_BACKGROUND_COLOR};
			background-position: ${FORMELEMENT_BACKGROUND_POSITION};
			background-repeat: ${FORMELEMENT_BACKGROUND_REPEAT};
		&:hover {
			cursor: pointer;
		}
	}

	/*** Specific Styles */
	select {
		&:disabled { 
			background-color: rgba(236, 236, 236, 0.2);
			border-color: rgba(236, 236, 236, 0.4);
			&::-webkit-input-placeholder { color: rgba(236, 236, 236, 0.8); }
			&:-moz-placeholder { color: rgba(236, 236, 236, 0.8); }
			&::-moz-placeholder { color: rgba(236, 236, 236, 0.8); }
			&:-ms-input-placeholder { color: rgba(236, 236, 236, 0.8); }
		}
	}
`