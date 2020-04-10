import React, { Component } from 'react'
import styled from 'styled-components'
import ChannelSection from './channels/ChannelSection'
import UserSection from './users/UserSection'
import MessageSection from './messages/MessageSection'
import Socket from './socket'

class ChatApp extends Component {

	constructor(props){
		super(props)
		this.state = {
			channels: [],
			users: [],
			messages: [],
			activeChannel: {},
			connected: false
		}
	}

	componentDidMount() {
		let socket = this.socket = new Socket()
		socket.on('connect', this.onConnect.bind(this))
		socket.on('disconnect', this.onDisconnect.bind(this))
		socket.on('channel add', this.onAddChannel.bind(this))
		socket.on('user add', this.onAddUser.bind(this))
		socket.on('user edit', this.onEditUser.bind(this))
		socket.on('user remove', this.onRemoveUser.bind(this))
		socket.on('message add', this.onMessageAdd.bind(this))
	}

	onMessageAdd(message) {
		let { messages } = this.state
		messages.push(message)
		this.setState({ messages })
	}

	onRemoveUser(removeUser) {
		let { users } = this.state
		users = users.filter( user => {
			return user.id !== removeUser.id
		})
		this.setState({ users })
	}

	onAddUser(user) {
		let { users } = this.state
		users.push(user)
		this.setState({ users })
	}

	onEditUser(editUser) {
		let { users } = this.state
		users = users.map( user => {
			if (editUser.id === user.id) {
				return editUser()
			}
			return user
		})
		this.setState({ users })
	}

	onConnect() {
		this.setState({ connected: true })
		this.socket.emit('channel subscribe')
		this.socket.emit('user subscribe')
	}

	onDisconnect() {
		this.setState({ connected: false })
	}

	onAddChannel(channel) {
		let { channels } = this.state
		channels.push(channel)
		this.setState({ channels })
	}

	addChannel(name) {
		this.socket.emit('channel add', {name})
	}

	setChannel(activeChannel) {
		this.setState({ activeChannel })
		this.socket.emit('message unsubscribe')
		this.setState({ messages: [] })
		this.socket.emit('message subscribe',
			{ channelId: activeChannel.Id }
		)
	}

	setUserName(name) {
		this.socket.emit('user edit', {name})
	}

	addMessage(body) {
		let { activeChannel } = this.state
		this.socket.emit('message add', 
			{ channelId: activeChannel.id, body }
		)
	}

	render() {
		return (
			<StyledSection className="Chat-app">
				<section className="Chat-channels">
					<ChannelSection
						activeChannel={this.state.activeChannel}
						channels={this.state.channels}
						// or- {...this.state} could remove channels props
						addChannel={this.addChannel.bind(this)}
						setChannel={this.setChannel.bind(this)}
					/>
				</section>
				<section className="Chat-users">
					<UserSection
						{...this.state}
						setUserName={this.setUserName.bind(this)}
					/>
				</section>
				<section className="Chat-messages">
					<MessageSection
						{...this.state}
						addMessage={this.addMessage.bind(this)}
					/>
				</section>
			</StyledSection>
		)
	}
}

export default ChatApp

const StyledSection = styled.section`

	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1rem;
	grid-template-areas:
		"chatchannels chatmessages"
		"chatusers    chatmessages";

	section.Chat-channels { grid-area: chatchannels; }
	section.Chat-users 		{ grid-area: chatusers; }
	section.Chat-messages { grid-area: chatmessages; }

	.Chat-channels, .Chat-users, .Chat-messages {
		margin: 0rem 0rem 0rem 0rem;
		padding: 1rem 1rem 1rem 1rem;
		border: 1px solid blue;
	}




	margin: 0rem 0rem 0rem 0rem;
	padding: 1rem 1rem 1rem 1rem;
	background-color: ${props => props.theme.Modules.backgroundColor};
`