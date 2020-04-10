import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import GlobalStyleSystem from '../stylesystem/GlobalStyleSystem'

import AppHeader from './appheader/AppHeader'
import AppNavPanel from './appnavpanel/AppNavPanel'
import AppsHeader from './appsheader/AppsHeader'
import Dashboard from './dashboard/Dashboard'
import TodoApp from './todoapp/TodoApp'
import ChatApp from './chatapp/ChatApp'
import FormElements from './formelements/FormElements'
import CounterApp from './counterapp/CounterApp'
import VideoApp from './videoapp/VideoApp'

const Workspace = props => {
	const appstate = useSelector(state => state.appstateReducer)
  
	let WorkspaceArea

	if(appstate.valModuleapp==="todoapp"){
		WorkspaceArea = "Todoapp"
	} else if(appstate.valModuleapp==="chatapp"){
		WorkspaceArea = "Chatapp"
	} else if(appstate.valModuleapp==="formelements"){
		WorkspaceArea = "Formelements"
	} else if(appstate.valModuleapp==="counterapp") {
		WorkspaceArea =  "Counterapp"
	} else if(appstate.valModuleapp==="videoapp") {
		WorkspaceArea =  "Videoapp"
	} else {
		WorkspaceArea = "Dashboard"
	}

	return (
		<StyledWorkspace id="workspace-screen" className="Workspace-screen">
			<GlobalStyleSystem/>
			<div className="App-adminnav">
				<AppNavPanel/>
			</div>
			<div className="App-workspace">
				<AppHeader/>
				<AppsHeader/>
				{(() => {
					switch(WorkspaceArea) {
						case 'Todoapp':
							return <TodoApp/>
						case 'Chatapp':
							return <ChatApp/>
						case 'Formelements':
							return <FormElements/>
						case 'Counterapp':
							return <CounterApp/>
						case 'Videoapp':
							return <VideoApp/>
						default:
							return <Dashboard/>;
					}
				})()}
			</div>
		</StyledWorkspace>
	)
}

export default Workspace

const StyledWorkspace = styled.section`

  height: 100vh;
	background-color: ${props => props.theme.AppGlobal.backgroundColor};
  color: ${props => props.theme.AppGlobal.textColor};
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.AppGlobal.textHeaderColor};
  }
  
  .App-workspace {
    background-color: ${props => props.theme.AppGlobal.backgroundColor};
  }

	button, .btn {
		color: ${props => props.theme.AppGlobal.buttonTextColor};
		background-color: ${props => props.theme.AppGlobal.buttonBGColor};
		border: 1px solid ${props => props.theme.AppGlobal.buttonBorderColor};
		&:hover,&:focus,&:active  { 
			color: ${props => props.theme.AppGlobal.buttonTextColorHover}; 
			background-color: ${props => props.theme.AppGlobal.buttonBGColorHover};
			border: 1px solid ${props => props.theme.AppGlobal.buttonBorderColorHover}; 
		}
		&:visited { background-color: ${props => props.theme.AppGlobal.buttonBGColor}; color: ${props => props.theme.AppGlobal.buttonTextColorHover};  }
	}

`
