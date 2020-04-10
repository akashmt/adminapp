import { createGlobalStyle  }  from 'styled-components'

export const UserWelcome = createGlobalStyle`
	.User-welcome {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		a {
			margin: 0px 15px 0px 0px;
			svg {
				width: 28px;
				&:hover { }
			}
		}
		div.user-text {
			small { display: block; }
			span {
				display: block;
				a { &:hover { } }
			}
		}
	}
`