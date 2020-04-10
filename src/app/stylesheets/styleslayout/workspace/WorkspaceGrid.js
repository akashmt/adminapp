import { createGlobalStyle  }  from 'styled-components'

export const WorkspaceGrid = createGlobalStyle `

  .Workspace-screen  {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:"appadminnav appworkspace";
    
    section.App-adminnav 	{ grid-area: appadminnav; }
    section.App-workspace { grid-area: appworkspace; }
  }

  &.is-side-open {
    .App-adminnav { margin-left: 0px; }
    .App-workspace	{ margin-left: 120px; }
  }

  &.is-submodule-open {
    .App-adminnav { margin-left: 0px;  width: 320px; }
    .submodule-nav.active { 
      z-index: 10 !important; 
    }
    .App-workspace	{ margin-left: 320px; }
  }

  &.is-submodule-selected {
    .App-adminnav { margin-left: 0px;  width: 200px; }
    .App-workspace	{ margin-left: 200px; width: auto; }
    nav.App-AdminNavigation ul li .submodule-nav { left: 0px; }
  }
  
  .App-adminnav {
    height: 100%;
    width: 120px;
    margin-left: -120px;
    position: fixed;
    top: 0px;
    left: 0px;
    transition: 0.5s;
  }

  .App-workspace	{
    transition: 0.5s;
    width: 100%;
    background: #f9f9f9;
    z-index: 11;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto) 1fr;
    grid-template-areas:
      "appheader"
      "appsheader"
      "modulearea";
    
    section.App-header 		{ grid-area: appheader; }
    section.Apps-header 	{ grid-area: appsheader; }
    section.Module-area 	{ grid-area: modulearea; }
  }

`;

