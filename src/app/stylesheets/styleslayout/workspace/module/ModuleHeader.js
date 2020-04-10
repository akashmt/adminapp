import { createGlobalStyle  }  from 'styled-components'

export const ModuleHeaderName = createGlobalStyle`
	.Module-headername {
		margin: 0px 0px 0px 0px;
		padding: 3px 15px 13px 15px;
		h2 {
			margin: 0px 0px -10px 0px;
			padding: 0px 0px 0px 0px;
			font-size: 1.4rem;
		}
	}
`

export const ModuleBreadcrumb = createGlobalStyle`
	nav.Module-breadcrumb {
		margin: 0px 0px 0px 0px;
		padding: 0px 15px 0px 15px;
		font-size: .8em;
		font-weight: bold;
		border-radius: 2px;
		ul {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin: 0px 0px 0px 0px;
			padding: 5px 5px 5px 5px;
			list-style: none;
			li {
				margin: 0px 5px 0px 0px;
				padding: 0px 0px 0px 0px;
				font-size: .9em;
				a {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					align-content: center;
					svg { margin-right: 10px; }
					svg#icon-tachometer { width: 18px; }
					svg#icon-angle-double-right-light { width: 14px; }
					&:hover { svg { } }
				}
			}
		}
	}
`