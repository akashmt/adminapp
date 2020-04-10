import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import appstore from './data/store'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './App'

import * as serviceWorker from './app/utilities/workers/serviceWorker'

ReactDOM.render(
	<Provider store={appstore}>
		<Router>
			<Switch>
				<Route path="/" exact={true} strict={true} component={App} />
			</Switch>
		</Router>
	</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();