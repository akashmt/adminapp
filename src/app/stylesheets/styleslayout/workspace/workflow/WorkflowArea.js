import { createGlobalStyle  }  from 'styled-components'

export const WorkflowAreaGrid = createGlobalStyle`
	.Workflow-area  {
		display: grid;
		grid-template-columns: 1fr 300px;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"workflowheader workflowaside"
			"workflowmain workflowaside";
		
		aside.Workflow-aside 		{ grid-area: workflowaside; }
		header.Workflow-header 	{ grid-area: workflowheader; }
		main.Workflow-main 			{ grid-area: workflowmain; }
	}
`

export const WorkflowArea = createGlobalStyle`
	.Workflow-area  {

		.Workflow-aside {
			margin: 0px 0px 0px 0px;
			padding: 15px 15px 15px 15px;
		}

		.Workflow-header {
			margin: 0px 0px 0px 0px;
			padding: 0px 0px 0px 0px;
		}
		
		.Workflow-main {
      display: grid;
      grid-template-rows: auto 1fr;
			margin: 0px 0px 0px 0px;
			padding: 15px 15px 15px 15px;
		}

	}
`
