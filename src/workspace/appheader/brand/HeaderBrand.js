import React, { Component } from 'react'
import styled from 'styled-components'

//import LogoJivasoft from '../../../app/icons/brand/jivasoft/LogoJivasoft'
import LogoEDSHat from '../../../app/icons/brand/eds/LogoEDSHat_liquid'
import LogoEDSText from '../../../app/icons/brand/eds/LogoEDSText_liquid'
import LogoEDSTextBottom from '../../../app/icons/brand/eds/LogoEDSTextBottom_liquid'

class HeaderBrand extends Component {
	render() {
		return (
			<StyledSection className="App-headerbrand">
				<figure>
					<LogoEDSHat/>
				</figure>
				<h1><LogoEDSText/><LogoEDSTextBottom/></h1>
			</StyledSection>
		)
	}
}

export default HeaderBrand

const StyledSection = styled.section`
	figure {
		svg {
			fill: ${props => props.theme.AppHeader.brandIconFill};
		}
	}
	h1 {
		svg { 
			fill: ${props => props.theme.AppHeader.brandTextFill};
		}
	}
`

