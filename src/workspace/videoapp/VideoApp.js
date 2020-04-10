import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import VideoPlayer from './components/VideoPlayer'

const VideoApp = () => (
	<Router>
		<Route>
			<StyledSection className="Videoapp-section">
				<Switch>
					<Route exact path="/" component={VideoPlayer} />
					<Route exact path="/:activeVideo" component={VideoPlayer} />
				</Switch>
			</StyledSection>
		</Route>
	</Router>
)

export default VideoApp

const StyledSection = styled.section`
	/* background-color: ${props => props.theme.Modules.backgroundColor}; */
	padding: 15px;
	h4 { color: green !important; }
`
