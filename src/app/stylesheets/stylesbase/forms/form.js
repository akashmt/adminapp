import { createGlobalStyle  }  from 'styled-components'

import { 
	FORM_MARGIN, FORM_MARGIN_LASTOFTYPE, FORM_PADDING,
	FORM_BORDER_SIZE, FORM_BORDER_TYPE, FORM_BORDER_COLOR,
	// FORMELEMENT_MARGIN, FORMELEMENT_PADDING, FORMELEMENT_HEIGHT,
	// FORMELEMENT_FONT_COLOR, FORMELEMENT_FONT_TEXTTRANSFORM,
	// FORMELEMENT_BORDER_WIDTH, FORMELEMENT_BORDER_RADIUS, FORMELEMENT_BORDER_COLOR,
	// FORMELEMENT_BORDER_COLOR_TRANSITION, FORMELEMENT_BORDER_STYLE, FORMELEMENT_BORDER_IMAGE,
	// FORMELEMENT_BACKGROUND_COLOR, FORMELEMENT_BACKGROUND_POSITION,
	// FORMELEMENT_BACKGROUND_REPEAT
} from './consts/globalconsts'

export const Form = createGlobalStyle`
	form {
    margin: ${FORM_MARGIN};
		&:last-of-type { margin: ${FORM_MARGIN_LASTOFTYPE}; }
		padding: ${FORM_PADDING};
		border: ${FORM_BORDER_SIZE} ${FORM_BORDER_TYPE} ${FORM_BORDER_COLOR};

		button {
			background-color: #606060;
			border-color: #606060;
			color: white;
		}
	}
`

export const FormGrid = createGlobalStyle`
	form.Form-twocolumn {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
	form.Form-threecolumn {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 15px;
	}
	form.Form-fourcolumn {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 15px;
	}
`

export const FormGroup = createGlobalStyle`
	.Form-group {
		margin: 0px 0px 15px 0px;
		label { display: block; margin-bottom: 5px; }
		input:not([type=checkbox]):not([type=radio]) { display: block; margin-bottom: 2px; }
		select { display: block; }
		small { display: block; }
	}
`