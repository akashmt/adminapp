import { createGlobalStyle  }  from 'styled-components'

export const AppsHeaderGrid = createGlobalStyle`
	.Apps-header {
		display: grid;
		/* grid-template-columns: 70px 200px 1fr; */
		grid-template-columns: 300px 200px 1fr;
		grid-template-areas: "brandarea modulearea agencyarea ";
    section.Brand-headerarea  { grid-area: brandarea; }
		section.Module-headerarea { grid-area: modulearea; }
    section.Agency-headerarea { grid-area: agencyarea; }
	}
`

export const AppsHeader = createGlobalStyle`
	.Apps-header {
		margin: 0px 0px 0px 0px;
		padding: 5px 15px 5px 15px;
		h2, h3 { 
			margin: 0px 10px 0px 0px;
		}
	}
`
