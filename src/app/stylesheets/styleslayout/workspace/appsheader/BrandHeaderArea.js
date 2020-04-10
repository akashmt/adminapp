import { createGlobalStyle  }  from 'styled-components'

export const BrandHeaderArea = createGlobalStyle`
	.Brand-headerarea {
    display: flex;
    justify-content: center;
    align-items: center;
    .Header-appsbrand {
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      overflow: hidden;
      .Brand-container {
        margin: 0px 0px 0px 0px;
        h3 {
          margin: 0px 0px 0px 0px;
          padding: 0px 0px 0px 0px;
          font-size: 1.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
	}
`