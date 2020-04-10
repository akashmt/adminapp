import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Video = ({ active, autoplay, endCallback, progressCallback }) => {
  const activeVideoURL = (active && active.video !== undefined) ? active.video : '';
  return (
    <StyledVideo>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0"}}
          playing={autoplay}
          controls={true}
          url={activeVideoURL}
          onEnded={endCallback}
          onProgress={progressCallback}
        />
      </StyledVideoWrapper>
    </StyledVideo>
  )
}

export default Video

const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const StyledVideo = styled.div`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`