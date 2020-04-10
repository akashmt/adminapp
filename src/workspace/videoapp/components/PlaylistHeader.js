import React from 'react'
import styled from 'styled-components'

const PlaylistHeader = ({ active, total }) => {
  
  return (
    <StyledPlaylistHeader>
      <p>{active ? (active.title) : ''}</p>
      <StyledJourney>
        {active ? active.num : ''} / {total}
      </StyledJourney>
    </StyledPlaylistHeader>

  )
}

export default PlaylistHeader

const StyledPlaylistHeader = styled.div`
  background: #696969;
  font-family: "Hind", sans-serif;
  font-weight: 800;
  font-size: 1em;
  color: #fff;
  padding: 15px;
  margin: 0 0 15px 0;
  min-height: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0px;
    padding: 0px;
  }
`

const StyledJourney = styled.div`
  background: #565656;
  font-size: 0.8em;
  padding: 2px 5px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;