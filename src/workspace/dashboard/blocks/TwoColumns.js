import React, { Component } from 'react'
import styled from 'styled-components'

class TwoColumns extends Component {
	render() {
		return (
			<StyledSection className="">
				<div className="Dashboard-block Block-left">
					<h3>Content Block</h3>
					<p>Content lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo rerum qui quisquam dolore at illum. Provident consectetur quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className="Dashboard-block Block-center">
					<h3>Content Block</h3>
					<p>Content lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo rerum qui quisquam dolore at illum. Provident consectetur quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className="Dashboard-block Block-right">
					<h3>Content Block</h3>
					<p>Content lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo rerum qui quisquam dolore at illum. Provident consectetur quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</StyledSection>
		)
	}
}

export default TwoColumns

const StyledSection = styled.section`

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 30px;
	/* grid-template-areas:"blockleft blockcenter blockright";
	
	div.Block-left    { grid-area: blockleft; }
	div.Block-center  { grid-area: blockcenter; }
	div.Block-right   { grid-area: blockright; } */

`