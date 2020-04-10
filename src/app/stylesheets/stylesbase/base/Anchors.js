import { createGlobalStyle  }  from 'styled-components';

export const Anchors = createGlobalStyle `

	a {
		color: blue;
			-webkit-transition: color 0.2s ease-in-out;
			-moz-transition: color 0.2s ease-in-out;
			-o-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
		text-decoration: none;
		a:active  { }
		&:visited { color: blue; }
		&:hover,
		&:focus,
		&:active  { color: red;  }
		&:hover,
		a:active  { outline: 0; }
		&:hover   { }
		&:focus   { outline: thin dotted; }
	}

`;