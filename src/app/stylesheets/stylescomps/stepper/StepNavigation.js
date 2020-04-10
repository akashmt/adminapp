import { createGlobalStyle  }  from 'styled-components'

export const StepNavigation = createGlobalStyle`

	.Step-navigation {
		.step-navbar {
			
      ol.Menus-workflowstepper {
        display: flex;
				counter-reset: list;
				margin: 0px 0px 0px 0px;
				padding: 0px 0px 0px 0px;
				list-style: none;
				li {
					counter-increment: list;
					margin: 0px 0px 0px 0px;
          padding: 4px 10px 4px 10px;
          border-radius: 3px;
          label {
            cursor: pointer;
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
				}
      }
      
    }
	}

` 