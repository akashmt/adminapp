# Styled-Components Import Options

## Inline
/src/component
```
import styled from 'styled-components';

return (
	<StyledSearchPanel>
	...
	</StyledSearchPanel>
)

export const StyledSearchPanel = styled.section`
	h1 { color: red; }
`;
```
## External File

/styles.index.js
```
import styled from 'styled-components';

export const StyledSearchPanel = styled.section`
	
`;
```

/src/component
```
import { } from './styles/index.js'

return (
	<StyledSearchPanel>
	...
	</StyledSearchPanel>
)
```

## Global Styles
```
```

## ThemeProvider
```
```

## ThemeProvider with Redux
```
```