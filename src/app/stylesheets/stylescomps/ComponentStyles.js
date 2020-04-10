import React from 'react'
import { SearchPanelGrid, SearchPanel, SearchBox } from './searchpanel/SearchPanel'
import { UserWelcome } from './appheader/UserWelcome'
import { StepNavigation } from './stepper/StepNavigation'

function ComponentStyles(){
  return (
		<React.Fragment>
			<SearchPanelGrid/>
			<SearchPanel/>
			<SearchBox/>
			<UserWelcome/>
			<StepNavigation/>
		</React.Fragment>
	)
}

export default ComponentStyles