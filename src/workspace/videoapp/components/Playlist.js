import React from 'react'
import styled from 'styled-components'

import Nightmode from './Nightmode'
import PlaylistHeader from './PlaylistHeader'
import PlaylistItems from './PlaylistItems'

const Playlist = ({ videos, active, nightMode, nightModeCallback }) => {
	return (
		<StyledPlaylist>
      <Nightmode 
        nightModeCallback={nightModeCallback} 
        nightMode={nightMode}
      />
      <PlaylistHeader active={active} total={videos.length} />
			<PlaylistItems videos={videos} active={active} />
		</StyledPlaylist>
	)
}

export default Playlist

const StyledPlaylist = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 450px;
  flex: 1 1 450px;
  overflow: hidden;
  /* height: 0;
  padding-top:50px;
  padding-bottom: 36%; */
	/* background-color: grey; */

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`