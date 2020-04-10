import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import AppStyles from './app/stylesheets/stylesbase/AppStyles'
import LayoutStyles from './app/stylesheets/styleslayout/LayoutStyles'
import ComponentStyles from './app/stylesheets/stylescomps/ComponentStyles'
import ThemeStyles from './app/stylesheets/stylestheme/ThemeStyles'

import { getStyles } from './data/actions/stylesActions'
import { getThemes } from './data/actions/themesActions'

import Workspace from './workspace/Workspace'

const Apps = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStyles())
    dispatch(getThemes())
  }, [dispatch]);

  const appstate = useSelector(state => state.appstateReducer)
  const styleslight = useSelector(state => state.stylesReducer.styleslight)
  const stylesdark = useSelector(state => state.stylesReducer.stylesdark)
  const themestyles = useSelector(state => state.themesReducer.themes)

    return (
      <ThemeProvider theme={(appstate.theme === false) ? styleslight : stylesdark}>
        <ThemeProvider theme={themestyles}>
          <div className="App">
            <AppStyles/>
            <LayoutStyles/>
            <ComponentStyles/>
            <ThemeStyles/>
            <Workspace/>
          </div>
        </ThemeProvider>
      </ThemeProvider>
    )
  }

export default Apps;

