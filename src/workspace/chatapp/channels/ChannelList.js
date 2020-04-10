import React, { Component } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import Channel from './Channel'

class ChannelList extends Component {
	render() {
		const { channels, setChannel, activeChannel } = this.props
		return (
			<StyledUL>
				{channels.map( (chan, index) => {
					return (
						<Channel
							key={index}
							channel={chan}
							setChannel={setChannel}
							activeChannel={activeChannel}
							// or- use spread ot send all props down to child
							// {...this.props}
							// so you could remove setChannel and activeChannel
						/>
					)
				})} 
			</StyledUL>
		)
	}
}

export default ChannelList

ChannelList.propTypes = {
	channels: PropTypes.array.isRequired,
	setChannel: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
}

const StyledUL = styled.ul`

`