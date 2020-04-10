import { createGlobalStyle  }  from 'styled-components'

export const SearchPanelGrid = createGlobalStyle`
	.Agency-searchpanel {
		.searchpanel-overlay {
			/* display: grid; */
		}
	}
`

export const SearchPanel = createGlobalStyle`

	.Agency-searchpanel {
		.searchpanel-overlay {
			z-index: 11;
			position: fixed;
			padding: 1rem 1rem 1rem 1rem;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100%;
			overflow-y: scroll;
			text-align: center;
			opacity: 0;
			-webkit-transform: translateY(-100%);
			transform: translateY(-100%);
			/* transition: opacity 0.45s 0.45s ease, -webkit-transform 0s 1.2s; */ */
			/* transition: opacity 0.45s 0.45s ease, transform 0s 1.2s; */
			/* transition: opacity 0.45s 0.45s ease, transform 0s 1.2s, -webkit-transform 0s 1.2s; */
		}
	}

.Agency-searchpanel {
	margin: 0px 0px 0px 0px;
	border-radius: 3px;
	.panel-icon {
		position: relative;
		transition: all .3s ease;
		svg#icon-search, svg#icon-bars {
			margin-right: 10px;
			width: 20px;
			height: 20px;
			&:hover { }
		}
		section.Agency-brand {
			h3 {
				span {
					font-size: 1rem;
					font-weight: 100;
					text-transform: uppercase;
					svg { 
						width: 22px;
					}
				}
			}
		}
		svg#icon-times {
			width: 42px;
			height: 42px;
			&:hover { }
		}
	}
	&.checked {
    .panel-icon {
      position: fixed;
      top: 30px;
      right: 60px;
      // transition-delay: .75s;
      z-index: 99;
    }
    .searchpanel-overlay {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      // transition-delay: 0s;
    }
  }
}

`

export const SearchBox = createGlobalStyle`

	.search-agency {
		margin: 100px auto 0px auto;
		min-width: 80%;
		max-width: 80%;
		.search-form {
      .form-group-radio {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        .radio-horizontal {
          margin: 10px;
          label {
            text-transform: capitalize;
          }
        }
      }
			input[type="text"] {
				margin: 0px 0px 0px 0px;
				padding: 0px;
				min-width: 100%;
				max-width: 100%;
				border: 1px;
				text-transform: uppercase;
      }

      .caret {
        height: 60px;
        display: block;
        .caret-content {
          height: 100%;
          display: block;
          padding: 10px 20px;
          border-bottom: 1px solid #ccc;
          position: relative;
          text-align: center;
          &:after {
            content: "";
            display: table;
            clear: both;
          }
          .caret-place-holder {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              color: #fff;
              font-size: 30px;
              padding: 10px 20px;
              display: inline-block;
              transition: all .4s;
              &.hide {
                  transform: scale(0);
                  opacity: 0;
              }
          }
          .input-content {
              font-size: 30px;
              vertical-align: top;
              padding-top: 4px;
              display: inline-block;
              height: 100%;
          }

          .input-caret {
              padding: 4px 5px;
              width: 0;
              height: 100%;
              background: #fff;
              display: none;

              &.bling {
                  display: inline-block;
                  animation: caret-bling 1s infinite, caret-scale .4s;
              }
          }
          .hidden-input {
            width: 0;
            height: 0;
            opacity: 0;
          }
        }
      }
      
      @keyframes caret-bling {
        0% {
          opacity: 1;
        }
      
        100% {
          opacity: 0;
        }
      }
      
      @keyframes caret-scale {
          0% {
              opacity: 0;
              transform: scaleX(15) scaleY(5);
          }
      
          100% {
              opacity: 1;
              transform: scaleX(1) scaleY(1);
          }
      }

    }
    
    

		.search-results {
			min-width: 100%;
      max-width: 100%;
      margin-top: 30px;
			ul {
				display: flex;
				flex-direction: row;
				justify-content: center;
				flex-wrap: wrap;
				align-items: flex-start;
				align-content: center;

				margin: 0px 0px 0px 0px;
				padding: 0px 0px 0px 0px;
				list-style-type: none;

				li {
					display: grid;
          margin: 15px;
          span {
            svg {
              width: 22px;
              margin: 0px auto;
              display: block;
              margin-bottom: 5px;
            }
            display: block;
            margin: 0px 0px 0px 0px;
            padding: 20px 20px 20px 20px;
            width: 200px;
            height: 120px;
            /* line-height: 50px; */
						text-transform: uppercase;
            &:hover { cursor: pointer; }
          }
				}
			}
		}
	}
`