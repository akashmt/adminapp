import { createGlobalStyle  }  from 'styled-components'

export const AppNavPanelGrid = createGlobalStyle`
	section.App-navpanel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-wrap: nowrap;
    align-items: center;
    width: 120px;
		height: 100vh;
	}
`

export const AppAdminNavLogo = createGlobalStyle`
	figure.App-AdminNavlogo {
		display: grid;
		place-items: center center;
		margin: 15px 15px 15px 15px;
		padding: 0px 0px 0px 0px;
		//width: 90px;
		//height: 90px;
		font-weight: bold;
		a { 
			svg#logo-jivasoft { width: 70px; height: 40px; }
		}
		&:hover {
			cursor: pointer; 
			svg#logo-jivasoft { }
		}
	}
`

export const AppAdminNavigation = createGlobalStyle`
	nav.App-AdminNavigation {
		ul {
			&.module-list {
				margin: 0px 0px 0px 0px;
				padding: 0px 0px 0px 0px;
				list-style: none;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			li {
        .submodule-nav {
          position: fixed;
          z-index: 1;
          height: 100%;
          width: 200px;
          top: 0px;
          left: 120px;
          background: #00162C;
					/* border-right: 1px solid #000000; */
          box-shadow: inset -5px 0px 8px 0px rgba( 17, 17, 17, .09);
          transition: 0.5s;
          .submodule-inner { 
						padding: 15px;
						ul.submodule-list {
							margin: 0px 0px 0px 0px;
							padding: 0px 0px 0px 0px;
							list-style: none;
							li {
								margin: 0px 0px 0px 0px;
								padding: 0px 0px 0px 0px;
								a {
									padding: 0px 15px 0px 15px;
									display: flex;
									flex-direction: row;
									justify-content: flex-start; 
									flex-wrap: nowrap;
									align-items: center; 
									align-content: center; 
									height: 40px;
									svg {
										margin: 0rem 0rem 0rem 0rem;
										height: 20px;
										width: 20px; 
										fill: #0081cc; 
									}
									div {
										margin: 0rem 0rem 0rem 0rem;
										padding-left: 15px;
										display: inline-block;
										font-size: .8rem;
										text-transform: uppercase;
									}
								}
							}
						}
					}
        }
				a {
					display: grid;
					grid-template-columns: 90px;
          grid-template-rows: 90px;
					place-items: center center;
					margin-bottom: 10px;
          height: 90px;
				}        
				&:hover {
          a { height: 90px; }
				}
				a {
					font-size: .6rem;
          font-weight: bold;
          transition: all .3s;
					svg {
						margin: -10px 0px 0px 0px;
						padding: 0px 0px 0px 0px;
            transition: all .3s;
					}
					svg#logo-extraduty-stacked { width: 50px !important; margin: -16px 0px 0px 0px; }
					svg#logo-onduty { width: 50px !important; }
					span { margin-top: -60px; text-align: center; }
					&:hover { svg { } }
        }
        &:hover {
          svg { }
					svg#logo-extraduty-stacked { width: 55px !important; }
					svg#logo-onduty { width: 55px !important; }
        }
			}
		}
	}
`
