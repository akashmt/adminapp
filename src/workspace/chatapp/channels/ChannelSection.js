import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

class ChannelSection extends Component {
	render() {
		return (
			<section className="Channel-section">
				<div className="Channel-heading">
					<h2>Channels</h2>
				</div>
				<div className="Channels">
					<ChannelList {...this.props} />
					<ChannelForm {...this.props} />
					{/* 
						Creates a new copy of props and copies them into comp
						- channel={channels}
						- setChannel={setChannel}
					*/}
				</div>
			</section>
		)
	}
}

export default ChannelSection

ChannelSection.propTypes = {
	channels: PropTypes.array.isRequired,
	setChannel: PropTypes.func.isRequired,
	addChannel: PropTypes.func.isRequired,
	activeChannel: PropTypes.object.isRequired
}