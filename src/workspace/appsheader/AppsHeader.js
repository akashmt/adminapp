import React from 'react'
import styled from 'styled-components'

import AppsBrand from './brandarea/AppsBrand'
import ModuleName from './modulearea/ModuleName'

const AppsHeader = props => {

		return (
			<StyledAppsHeader className="Apps-header">

				<section className="Brand-headerarea">
					<AppsBrand/>
				</section>

				<section className="Module-headerarea">
					<ModuleName/>
				</section>

				<section className="Agency-headerarea">
					
				</section>

			</StyledAppsHeader>
		)
	
}

export default AppsHeader

const StyledAppsHeader = styled.header`
	background-color: ${props => props.theme.AppsHeader.backgroundColor};
	border-bottom: ${props => props.theme.AppsHeader.borderBottom};
	.Brand-headerarea { }
	.Module-headerarea { }
	.Agency-headerarea { }
`