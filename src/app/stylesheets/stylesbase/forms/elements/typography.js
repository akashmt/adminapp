import { createGlobalStyle  }  from 'styled-components'

import { FORMTYPOGRAPHY_BORDER_SIZE, 
				 FORMTYPOGRAPHY_BORDER_TYPE, 
				 FORMTYPOGRAPHY_BORDER_COLOR} from '../consts/globalconsts'

export const FormHeaders = createGlobalStyle`
	form {
		h1, h2, h3, h4, h5, h6 { 
			margin: 0px 0px 15px 0px;
			padding: 0px 0px 0px 0px;
			text-transform: uppercase;
		}
		h1 {
			margin: 0px 0px 15px 0px;
			padding: 0px 0px 15px 0px;
			border-bottom: 
				${FORMTYPOGRAPHY_BORDER_SIZE} 
				${FORMTYPOGRAPHY_BORDER_TYPE} 
				${FORMTYPOGRAPHY_BORDER_COLOR};
		}
		h2 { }
		h3 { }
		h4 { }
		h5 { }
		h6 { }
	}
`

export const FormText = createGlobalStyle`
	form {
		p { 
			&.lead { font-style: italic; }
			strong { font-style: normal; }
		}
	}
`

export const FormHR = createGlobalStyle`
	form {
		hr { }
	}
`