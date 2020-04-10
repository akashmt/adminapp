import React from 'react'
import styled from 'styled-components'

//import LogoOnDuty from '../../../app/icons/brand/onduty/LogoOnDuty'

const AppsBrand = props => {

		return (
			<StyledSection className="Header-appsbrand">
				<div className="Brand-container">
					<h3>
            Liquid App
					</h3>
				</div>
			</StyledSection>
		)
	
}

export default AppsBrand

const StyledSection = styled.section`
  .Brand-container {
    svg#logo-extraduty-stacked, svg#logo-onduty {
      width: 60px;
      fill: ${props => props.theme.AppsHeader.brandLogoColor};
    }
    svg#logo-extraduty-stacked {  }
    svg#logo-onduty {  }
  }
  h3 {
    color: WHITE !important;
  }
`