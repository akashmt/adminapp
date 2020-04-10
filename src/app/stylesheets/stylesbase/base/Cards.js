import { createGlobalStyle  }  from 'styled-components';

export const Cards = createGlobalStyle `

	.card {
		margin: 0px 0px 0px 0px;
		padding: 15px 15px 15px 15px;
		border-radius: 4px;
		width: 100%;
		box-sizing: border-box;
		-webkit-column-break-inside: avoid;

		&:first-child  {  }
		&:nth-child(2) {  }
		&:nth-child(3) {  }
		&:last-child   {  }
	}

`;