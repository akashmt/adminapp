import { createGlobalStyle  }  from 'styled-components'

export const AppHeaderGrid = createGlobalStyle`
	.App-header {
		display: grid;
		grid-template-columns: 40px auto 1fr 1fr;
		grid-template-areas: "appadminpanel appheaderbrand appheadernav appusernav";
		section.App-adminpanel 	{ grid-area: appadminpanel; }
		section.App-headerbrand { grid-area: appheaderbrand; }
		nav.App-headernav 			{ grid-area: appheadernav; }
		nav.App-usernav 				{ grid-area: appusernav; }
	}
`

export const AppHeader = createGlobalStyle`
	.App-header {
		margin: 0px 0px 0px 0px;
		padding: 2px 15px 2px 15px;
	}
`

export const AppTriggerAdminPanel = createGlobalStyle`
	.App-triggeradminpanel {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		svg#icon-bars {
			margin-top: 2px;
			height: 20px;
			width: 20px;
		}
	}
`

export const AppHeaderBrand = createGlobalStyle`
	.App-headerbrand {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		padding-right: 50px;
		img { 
			margin-right: 15px;
			max-width: 40px;
			max-height: 40px;
		}
		figure {
			margin: 0px 0px 0px 0px;
			padding: 0px 0px 0px 0px;
			svg#logo-jivasoft, svg#logo-eds-hat-liquid { margin-right: 15px; }
			svg#logo-jivasoft { width: 100px; }
			svg#logo-eds-hat-liquid { width: 50px; }
		}
		h1 {
			font-size: 1.5rem;
			span { }
			svg#logo-eds-text-liquid {
				margin: 0px 0px 5px 0px;
				display: block; 
				width: 100px; 
			}
			svg#logo-eds-textbottom-liquid { 
				display: block; 
				width: 80px; 
			}
		}
	}
`

export const AppHeaderNav = createGlobalStyle`
	.App-headernav {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		ul {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			list-style: none;
			li {
				a {
					margin: 0px 5px 0px 0px;
					padding: 2px 5px 2px 5px;
				}
			}
		}
	}
`

export const AppUserNav = createGlobalStyle`
	.App-usernav {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		align-content: center;
		ul {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin: .6rem 0rem .6rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
			list-style: none;
			li {
				margin-right: 15px;
				&:last-of-type { margin-right: 0px; }
			}
		}
	}
`;
