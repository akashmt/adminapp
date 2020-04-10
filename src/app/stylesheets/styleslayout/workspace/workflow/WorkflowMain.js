import { createGlobalStyle  }  from 'styled-components'

export const WorkflowMain = createGlobalStyle`
	.Workflow-main {
    .Workflow-header {
      display: grid;
      .Workflow-header-details {
        display: flex;
        align-items: baseline;
        h2 {
          margin-right: 15px;
        }
      }
      .Workflow-header-steps {
        display: flex;
        align-items: center;
      }
    }
    
		.Workflow-content-twocolumn {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: "workflowleft workflowright";
			grid-gap: 30px;
			div.Module-left 	{ grid-area: workflowleft; }
			div.Module-right  { grid-area: workflowright; }
		}
		
		.Workflow-content {
			margin: 0px 0px 15px 0px;
			padding: 15px 15px 15px 15px;
      border-radius: 2px;
      overflow: hidden;
			&:last-of-type {
        margin: 0px 0px 0px 0px;
        position: relative;
      }
      .workflow-form {
        //height: 100%;
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 15px;
        top: 15px;
        & > form {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 100%;
        }
      }
		}

	}

`