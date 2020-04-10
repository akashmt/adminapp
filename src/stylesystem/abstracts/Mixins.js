import { css } from 'styled-components'

// CSS Helper
// css tag templete literal needed for props in mixins (functions)
export const mixinFixedTop = css`
	position: fixed;
	left: 0;
	top: 0;
	/* with props */
	/* top: ${({ top }) => top + 'px'}; */
`