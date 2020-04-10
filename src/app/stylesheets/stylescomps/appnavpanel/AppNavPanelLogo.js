import { createGlobalStyle  }  from 'styled-components'

export const AppAdminNavLogo = createGlobalStyle`
	figure.App-AdminNavlogo {
		display: grid;
		place-items: center center;
		margin: 15px 0px 15px 0px;
		padding: 0px 0px 0px 0px;
		width: 90px;
		height: 90px;
		font-weight: bold;
		a { 
			svg#logo-jivasoft { width: 70px; height: 70px; }
		}
		&:hover {
			cursor: pointer; 
			svg#logo-jivasoft { }
		}
	}
`