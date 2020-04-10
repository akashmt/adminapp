import { createGlobalStyle  }  from 'styled-components'

export const WorkflowAside = createGlobalStyle`
	.Workflow-menugroup {
    border-radius: 2px;
		.Workflow-menugrouptitle {
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

		.Workflow-menugroupitems {
			padding: 15px 0px 15px 0px;
			h3 {
				margin: 0px 0px 15px 0px;
				padding: 0px 0px 0px 15px;
			}
		
			ol.Menus-workflowstepper {
				counter-reset: list;
				margin: 0px 10px 0px 10px;
				padding: 0px 0px 0px 0px;
				list-style: none;
				& > li {
					counter-increment: list;
					margin: 0px 0px 0px 0px;
          padding: 10px 0 10px 0px;
          display: flex;
          flex-wrap: wrap;
          label {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            width: 80%;
            align-items: center;
            font-weight: bold; 
            svg#icon-angle-right, svg#icon-angle-down {
              width: 20px;
              height: 20px;
              vertical-align: middle;
            }
          }
					&:before {
						content: counter(list);
						display: inline-block;
						margin: 0px 15px 0px 0px;
						padding: 0px 0px 0px 0px;
						width: 2.2em;
						height: 2.2em;
						text-align: center;
						font-size: 15px;
						line-height: 2.3em;
						border-radius: 50%;
          }
          .step-content {
            height: 0;
            overflow-y: hidden;
            ul {
              margin: 10px 0px 0px 15px;
              padding: 0px 0px 0px 0px;
              list-style: none;
              li {
                padding: 5px 0px;
                margin: 0px;
                list-style: circle;
              }
            }
          }
          &.active {
            .step-content {
              padding: 15px;
              height: 170px;
              transition-property: all;
              transition-duration: .5s;
              transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            }
          }
				}
      }
      
    }
    
    .Workflow-accordian {
      width: 100%;
      margin-top: 20px;
      .bar{
        padding: 20px;
        display: block;
        text-decoration: none;
        svg#icon-angle-right, svg#icon-angle-down {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
      .content{
        height: 0;
        transition: 0.5s;
        overflow: hidden;
      }
      .content:target{
        height:200px;
        padding: 20px;
      }
    }
		
	}
`;

