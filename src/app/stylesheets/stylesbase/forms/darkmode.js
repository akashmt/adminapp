import { createGlobalStyle  }  from 'styled-components'

export const DarkmodeCheckbox = createGlobalStyle`
	span.darkmode-toggle {
		input[type=checkbox]{
			height: 0;
			width: 0;
			visibility: hidden;
			&:checked + label { }
			&:checked + label:after {
				left: calc(100% - 5px);
				transform: translateX(-100%);
			}
		}
		label {
			cursor: pointer;
			text-indent: -9999px;
			width: 52px;
			height: 27px;
			float: right;
			border-radius: 100px;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				top: 3px;
				left: 3px;
				width: 20px;
				height: 20px;
				border-radius: 90px;
				transition: 0.3s;
			}
			&:active:after { width: 45px; }
		}
	}
`