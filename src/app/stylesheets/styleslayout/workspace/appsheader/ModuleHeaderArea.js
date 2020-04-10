import { createGlobalStyle  }  from 'styled-components'

export const ModuleHeaderArea = createGlobalStyle`
	.Module-headerarea {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}
`

export const AppsModuleName = createGlobalStyle`
	.Module-name { 
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		margin: 0px 0px 0px 0px;
		padding: 11px 5px 11px 5px;
		width: 100%;
		border-radius: 2px;
		svg#icon-user {
			margin-right: 5px;
			width: 20px;
			height: 20px;
		}
		h3 {
			font-size: 1rem;
			font-weight: 100;
			text-transform: uppercase;
		}
	}
`

export const AppsModuleSwitcher = createGlobalStyle`
	.Apps-moduleswitcher {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		h3 { }
		svg {
			&#icon-random {
				margin-right: 10px;
				width: 20px;
				height: 20px;
				&:hover { }
			}
		}
		select { }
	}
`

export const ApplicationSwitcher = createGlobalStyle`
	.Apps-switcher {

	}
`

export const ModuleSwitcher = createGlobalStyle`
	.Module-switcher {

	}
`