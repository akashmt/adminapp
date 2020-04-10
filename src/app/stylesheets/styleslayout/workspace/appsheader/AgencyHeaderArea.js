import { createGlobalStyle  }  from 'styled-components'

export const AgencyHeaderArea = createGlobalStyle`
	.Agency-headerarea {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}
`

export const AgencySwitcher = createGlobalStyle`
	.Agency-switcher {
		section.Agency-searchpanel {
			margin-left: 15px;
			a.panel-icon {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
        align-content: center;
        padding: 10px 5px 10px 5px;
				svg#icon-bars { margin-right: 15px; }
				section.Agency-brand {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					align-content: center;
					h3 {
						span {
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							align-content: center;
							font-size: 1rem;
							font-weight: 100;
							text-transform: uppercase;
							svg { 
								margin-right: 5px;
								width: 22px;
							}
						}
					}
				}
				svg#icon-times { }
			}
		}
	}
`