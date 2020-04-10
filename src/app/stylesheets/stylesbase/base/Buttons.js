import { createGlobalStyle  }  from 'styled-components';

export const Buttons = createGlobalStyle `

	button, a.btn {
		margin: 0px 0px 0px 0px;
		padding: 6px 10px 5px 10px;
		font-weight: 700;
		font-size: .9rem;
		text-transform: uppercase;
		cursor: pointer;
		border-radius: 2px;
		/* border-radius: .15rem; */

		&:hover,
		&:focus,
		&:active  { }
		&:hover,
		a:active  { outline: 0; }
		&:hover   { }
		&:focus   { outline: 5px auto -webkit-focus-ring-color; }
		a:active  { }
		&:visited { }

		&.btn-icon {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			svg {
				margin-top: -3px;
				margin-right: 10px;
				width: 14px;
			}
			span { }
		}


		/* 
		&.btn-large  { padding: .6rem 1rem .6rem 1rem; font-size: 1rem; }
		&.btn-medium { padding: .5rem .7rem .4rem .7rem; font-size: .8rem; }
		&.btn-small  { padding: .3rem .4rem .2rem .4rem; font-size: .6rem; } 
		*/
	}

`;