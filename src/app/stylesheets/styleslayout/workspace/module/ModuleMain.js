import { createGlobalStyle  }  from 'styled-components'

export const ModuleMain = createGlobalStyle`
	.Module-main {
		.Module-content-twocolumn {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: "moduleleft moduleright";
			grid-gap: 30px;
			div.Module-left 	{ grid-area: moduleleft; }
			div.Module-right  { grid-area: moduleright; }
		}
		
		.Module-content {
			margin: 0px 0px 30px 0px;
			padding: 15px 15px 15px 15px;
			border-radius: 2px;
			&:last-of-type {
				margin: 0px 0px 0px 0px;
			}
		}

	}

`