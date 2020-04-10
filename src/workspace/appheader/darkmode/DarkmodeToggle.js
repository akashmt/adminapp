import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const DarkmodeToggle = props => {

  const appstate = useSelector(state => state.appstateReducer)
  const dispatch = useDispatch()

  const handleThemeChange = e => {
    dispatch({ type: 'GET_THEME_VAL', _value:e.target.checked });
  }

  return (
    <StyledSpan className="darkmode-toggle">
      <input
        type="checkbox" 
        id="switch" 
        name="theme" 
        checked={appstate.theme} 
        onChange={handleThemeChange} />
      <label htmlFor="switch">Toggle</label>
    </StyledSpan>
  )
	
}

export default DarkmodeToggle

const StyledSpan = styled.span`
	input { 
		&:checked + label { 
			background-color: ${props => props.theme.AppHeader.darkmodeToggleInputBG};
		}
	}
	label { 
		background-color: ${props => props.theme.AppHeader.darkmodeToggleLabelBG};
		&:after { 
      background-color: ${props => props.theme.AppHeader.darkmodeToggleLabel};
    }
	}
`
