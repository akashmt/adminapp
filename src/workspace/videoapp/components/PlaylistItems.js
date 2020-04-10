import React from 'react'
import styled from 'styled-components'

import withLink from '../hoc/withLink'
import PlaylistItem from './PlaylistItem'

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
	<StyledPlaylistItems>
    {videos.map(video => (
      <PlaylistItemWithLink
        key={video.id}
        video={video}
        active={active && video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
	</StyledPlaylistItems>
)

export default PlaylistItems

const StyledPlaylistItems = styled.div`
  padding: 0 15px 0 15px;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;
  font-size: 10px;

  /* width */
  ::-webkit-scrollbar { width: 5px; }

  /* Track */
  ::-webkit-scrollbar-track { background: transparent; }

  /* Handle */
  ::-webkit-scrollbar-thumb { background: #888; border-radius: 2px; }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover { background: #555; }
`