import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import Video from './Video'
import Playlist from './Playlist'

const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
}

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
}

const VideoPlayer = ({ match, history, location }) => {

  const videos = JSON.parse(document.querySelector('[name="videos"]').value)
  const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`))
  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videos.playlist,
    activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
    nightMode: savedState ? savedState.nightMode : true,
    playlistId: savedState ? savedState.playlistId : videos.playlistId,
    autoplay: false
  })

  useEffect(
    () => {
      localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }))
    }, [state]
  )

  useEffect(() => {
    const videoId = match.params.activeVideo
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      )
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }))
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      })
    }
  }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos])

  const nightModeCallback = () => {
    setState(prevState => ({ ...prevState, nightMode: !prevState.nightMode }))
  }

  const endCallback = () => {
    const videoId = match.params.activeVideo
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === videoId
    )

    const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1

    history.push({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: false
    })
  }

  const progressCallback = (e) => {
    if(e.playedSeconds > 10 && e.playedSeconds < 11) {
      setState({
        ...state,
        videos: state.videos.map( element => {
          return element.id === state.activeVideo.id
            ? { ...element, played: true }
            : element
        })
      })
    }
  }

	return (
		<ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null 
        ? (
          <StyledVideoPlayer>
            <Video
              active={state.activeVideo}
              autoplay={state.autoplay}
              endCallback={endCallback}
              progressCallback={progressCallback}
            />
            <Playlist
              videos={state.videos}
              active={state.activeVideo}
              nightModeCallback={nightModeCallback}
              nightMode={state.nightMode}
            />
          </StyledVideoPlayer>
          ) 
        : null
      }
		</ThemeProvider>
	)
}

export default VideoPlayer

const StyledVideoPlayer = styled.div`
  background: ${props => props.theme.bgcolor}; /* #353535; */
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`