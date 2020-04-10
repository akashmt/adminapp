import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import MainSection from './components/MainSection'
import './index.css'

const TodoApp = (props) => {

  return (
    <StyledSection>
      <Header/>
      <MainSection/>
    </StyledSection>
  )
}

export default TodoApp


const StyledSection = styled.section`
  background-color: ${props => props.theme.Modules.backgroundColor};
  padding: 15px;
`