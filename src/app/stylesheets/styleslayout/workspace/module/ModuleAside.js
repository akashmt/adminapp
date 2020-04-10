import { createGlobalStyle  }  from 'styled-components'

export const AsideAppsBrand = createGlobalStyle`
	.Aside-appsbrand {
		margin: 0px 0px 15px 0px;
		padding: 0px 0px 0px 0px;
		overflow: hidden;
		.Brand-container {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin: 0px 0px 15px 0px;
			padding: 9px 15px 9px 15px;
			svg#icon-arrow-alt-circle-right {
				margin-right: 15px;
				width: 30px;
				height: 30px;
			}
			h3 {
				margin: 8px 0px 0px 0px;
				padding: 0px 0px 5px 0px;
				font-size: 1.8rem;
			}
		}
	}
`

export const AsideMenuGroup = createGlobalStyle`
	.Module-menugroup {
		border-radius: 2px;
		.Module-menugrouptitle {
			padding: 15px;
			h4 {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
				margin: 0px 0px 0px 0px;
				padding: 0px 0px 0px 0px;
				font-size: 1.2rem;
				svg#icon-ellipsis-v {
					margin-right: 12px;
					width: 8px;
				}
				span { }
			}
		}

		.Module-menugroupitems {
			padding: 15px 0px 15px 0px;
			h3 {
				margin: 0px 0px 15px 0px;
				padding: 0px 0px 0px 15px;
			}
			ul.Menus-workflows {
				margin: 0px 0px 0px 0px;
				padding: 0px 0px 0px 0px;
				list-style: none;
				li { 
          margin: 0px 0px 0px 0px;
          padding: 10px 0px 10px 0px;
          span.tab-title { cursor: pointer }
					svg#icon-folder, svg#icon-folder-open {
						margin: 0px 24px 0px 0px;
						width: 14px;
						height: 14px;
					}
					svg#icon-folder, svg#icon-folder-open {
						margin: 0px 14px 0px 17px;
					}
					font-weight: bold;
					a {
						margin: 0px 0px 0px 0px;
            padding: 10px 10px 10px 10px;
            font-weight: normal;
            display: flex;
						svg { margin: 0px 24px 0px 0px; }
						&:hover { }
					}
					ul {				
						margin: 10px 0px 0px 0px;
						padding: 0px 0px 0px 8px;
            list-style: none;
            transition: all 0.2s;
            &.hide {
              display: none;
            }
						li {
              padding: 0px 0px 0px 0px;
							a {
								svg#icon-angle-right {margin: 0px 14px 0px 0px; width: 14px; height: 14px; }
								&:hover { }
							}
						}
					}
				}
			}
		}
		
	}
`;

