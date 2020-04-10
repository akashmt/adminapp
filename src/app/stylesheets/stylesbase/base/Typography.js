import { createGlobalStyle  }  from 'styled-components'
import { FONTBASE, 
		 FONTFAMILY_HEADER, FONTFAMILY_SUBHEADER, 
		 FONTFAMILY_TEXT, FONTFAMILY_HANDWRITING,
		 FONT_HEADER, FONT_SUBHEADER,
		 FONT_TEXT, FONT_HANDWRITING } from '../consts/fonts'

export const Typography = createGlobalStyle `
	@import url(${FONTFAMILY_HEADER});
	@import url(${FONTFAMILY_SUBHEADER});
	@import url(${FONTFAMILY_TEXT});
	@import url(${FONTFAMILY_HANDWRITING});
	html { }
	body { 
		font-size: ${FONTBASE};
		font-family: ${FONT_TEXT};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1, h2, h3, h4, h5, h6 { margin:0px 0px 15px 0px; text-transform: uppercase; }
	h1 { font-size: 2.0rem; margin-bottom: 0px; font-family: ${FONT_HEADER}; }
	h2 { font-size: 1.8rem; font-weight: 700; font-family: ${FONT_SUBHEADER};}
	h3 { font-size: 1.5rem; font-weight: 700; }
	h4 { font-size: 1.3rem; }
	h5 { font-size: 1.1rem; }
	h6 { font-size: 1.0rem; }

	h1.app-title { font-size: 1.5rem; }

	h1.page-title,
	p.page-title { font-size: 2.3em;}
	h1.page-title,
	p.page-title       { display: none; }
	p.page-description { font-size: 1.3em; }

	p {
		margin-bottom: 15px;
		font-family: ${FONT_TEXT};
		.lead { font-family: ${FONT_HANDWRITING}; }
	}

	small { }

	strong { }
	b { }

	em { }
	i { } /* Use for I cons */

	strike, s { }
	u { } /* Underline */

	mark { } /* Marked Text/Highlight */

	del { } /* Blocks of text that are deteled from use */

	ins { } /* Inserted Text */

	address { }

	time { } /* reference: https://www.w3schools.com/tags/att_time_datetime.asp */

`;