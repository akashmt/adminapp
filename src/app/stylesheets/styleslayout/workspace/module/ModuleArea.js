import { createGlobalStyle  }  from 'styled-components'

export const ModuleAreaGrid = createGlobalStyle`
	.Module-area  {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"moduleaside moduleheader"
			"moduleaside modulemain";
		
		aside.Module-aside 		{ grid-area: moduleaside; }
		header.Module-header 	{ grid-area: moduleheader; }
		main.Module-main 			{ grid-area: modulemain; }
	}
`

export const ModuleArea = createGlobalStyle`
	.Module-area  {

		.Module-aside {
			margin: 0px 0px 0px 0px;
			padding: 15px 15px 15px 15px;
		}

		.Module-header {
			margin: 0px 0px 0px 0px;
			padding: 15px 15px 15px 15px;
		}
		
		.Module-main {
			margin: 0px 0px 0px 0px;
			padding: 15px 15px 15px 15px;
		}

	}
`
