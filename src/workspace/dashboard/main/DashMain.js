import React, { Component } from 'react'

import DashboardHero from '../hero/Hero'
import Analytics from '../blocks/Analytics'
import TwoColumns from '../blocks/TwoColumns'
// import MQTest from '../../../stylesystem/MQTest'
import { H1 } from '../../../stylesystem/typography'
import { Button, ButtonCancel } from '../../../stylesystem/base'
// import Header from '../../../stylesystem/layouts/Header'
import Header from '../../../stylesystem/layouts/Header'
import { Input, InputCancel, InputSubmit, Textarea }  from '../../../stylesystem/forms'

class DashMain extends Component {
	render() {
		return (
			<main className="Module-main">
				<Header/>
				<H1>Hi!</H1>
				<Button type="send">Send</Button>
				<Button type="cancel">Send</Button>
				<ButtonCancel>Cancel</ButtonCancel>
				<br/><br/>
				<Input/>
				<br/><br/>
				<InputSubmit/>
				<br/><br/>
				<InputCancel/>
				<br/><br/>
				<Textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Textarea>
				<br/><br/>
				<DashboardHero/>
				{/* <MQTest/> */}
				<Analytics/>
				<TwoColumns/>
			</main>
		)
	}
}

export default DashMain