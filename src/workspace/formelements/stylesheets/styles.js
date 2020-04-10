import styled from 'styled-components';

export const StyledFormElements = styled.section`
  padding: 15px;
`
export const StyledElement = styled.div`
	.element-title, .element-card { 
		margin: 0px 0px 0px 0px;
		padding: 15px;
  }
  
  .element-lists {
    display: grid;  
    grid-gap: 15px;
    @media only screen and (min-width: 40em) {
      grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
    }
  }

	.element-card { 
		border: 1px solid rgba(35, 35, 35, .1);
		background: WHITE;
		label {
			display: block;
			margin-bottom: 15px;
			font-weight: bold;
			color: rgba(35, 35, 35, .8);
		}
		input {
			margin-bottom: 15px;
		}
		pre {
			width: 100%;
			background-color: RED;
			border-radius: 5px;
			code {
				display: block;
				margin: 0px 0px 0px 0px;
				padding: 30px;
				border-radius: 5px;
				background-color: #232323;
				color: WHITE;
			}
		}
	}

`;