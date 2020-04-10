import { createGlobalStyle  }  from 'styled-components'

import { 
	FORM_COLOR
} from '../consts/globalconsts'

export const FormInputRadio = createGlobalStyle`
	
	/*** Layout Styles */
	div.radio-horizontal {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap; 
		align-items: center;
    align-content: center;
    cursor: pointer;

		margin-bottom: 5px;
		input { }
    span  { }
    label {
      margin-bottom: 0px;
      cursor: pointer;
    }
	}

	div.radio-vertical { }

	/*** Specific Styles */
	input[type="radio"] {
		margin-right: 5px;
		width: 16px;
		height: 16px;
		border-radius: 6px;
		cursor: pointer;
		&:hover {
			background-color: #909090;
			border-color: #909090;
			width: 16px;
			height: 16px;
			border-radius: 8px;
		}
		&:checked {
			width: 16px;
			height: 16px;
			border-radius: 10px;
			background-color: ${FORM_COLOR}
		}
	}

	/*** Required State Styles */
	input[type="radio"]:required {
		border: 1px solid red;
		background-color: salmon;
		&::-webkit-input-placeholder { color: white; }
		&:-moz-placeholder { color: white; }
		&::-moz-placeholder { color: white; }
		&:-ms-input-placeholder { color: white; }
		outline: none;
		&:hover { opacity: .6; }
		&:checked {
			background-color: #606060;
			border: 1px solid #606060;
			&~ span { color: #606060; }
		}
		&~ span { color: red; }
	}

	/*** Disabled State Styles */
	input[type="radio"]:disabled {
		background-color: rgba(236, 236, 236, 0.2);
		border-color: rgba(236, 236, 236, 0.4);
		&:hover {
			cursor: default;
			background-color: rgba(236, 236, 236, 0.2);
			border-color: rgba(236, 236, 236, 0.4);
			width: 16px;
			height: 16px;
			border-radius: 6px;
		}
		&~ span { color: rgba(236, 236, 236, 01); }
	}

	/*** TEMP */
	.Step-box {
		background-color: transparent;
		border-right: 10px solid white;
		&:last-of-type { border-right: 0px solid white; }
		div {
			margin: 10px 10px 10px 10px;
			padding: 0px 15px 0px 15px;
			input { }
			span { }
		}
	}

`