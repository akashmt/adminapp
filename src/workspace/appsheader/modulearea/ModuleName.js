import React from 'react'
import styled from 'styled-components'

import IconUser from '../../../app/icons/user/IconUser'

const ModuleName = props => {

		return (
			<StyledSection className="Module-name">
        <React.Fragment>
          <IconUser/><h3>App Name</h3>
        </React.Fragment>
			</StyledSection>
		)
	
}

export default ModuleName

const StyledSection = styled.section`
	color: ${props => props.theme.AppsHeader.moduleTextColor} !important;
	background-color: ${props => props.theme.AppsHeader.moduleBGColor};
	border: ${props => props.theme.AppsHeader.moduleBGBorderColor};
	svg#icon-user {
		fill: ${props => props.theme.AppsHeader.moduleIconColor};
	}
	h3 {
		color: ${props => props.theme.AppsHeader.moduleTitleColor} !important;
	}
`
