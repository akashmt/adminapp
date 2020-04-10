import { createGlobalStyle  }  from 'styled-components';

export const Breadcrumbs = createGlobalStyle `

	section.breadcrumb {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap;
		align-items: center;
		align-content: center;
		font-size: .9em;

		span {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: nowrap;
			align-items: center;
			align-content: center;
			margin: 0px 0px 0px 0px;
			font-weight: bold;
		}

		span.active {
			display: inline;
		}

		a { text-decoration: none; }

		svg {
			&.circle {
				margin-right: 10px;
				width: 12px;
				height: 12px;
				// fill: BLACK;
			}
			&.angle-right {
				margin-right: 0px;
				width: 20px;
				height: 20px;
				// fill: GREY;
			}
		}
	}

`;