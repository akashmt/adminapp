import React from 'react'
import { Normalize } from './vendors/Normalize'
import { HtmlBody } from './base/HtmlBody'
import { Typography } from './base/Typography'
import { Anchors } from './base/Anchors'
import { Buttons } from './base/Buttons'
import { Cards } from './base/Cards'
import { Alerts } from './base/Alerts'
import { Breadcrumbs } from './base/Breadcrumbs'

import { Form, FormGrid, FormGroup  } from './forms/form'
import { FormInput } from './forms/elements/input'
import { FormInputRadio } from './forms/elements/radio'
import { FormInputCheckbox } from './forms/elements/checkbox'
import { FormTextarea } from './forms/elements/textarea'
import { FormSelect } from './forms/elements/select'
import { FormHeaders, FormText, FormHR } from './forms/elements/typography'
import { DarkmodeCheckbox } from './forms/darkmode'
import { Spacing } from './utilities/spacing'

function AppStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
			<Typography/>
			<Anchors/>
			<Buttons/>
			<Alerts/>
			<Cards/>
			<Breadcrumbs/>
			<Form/>
				<FormGrid/>
				<FormGroup/>
				<FormHeaders/>
				<FormText/>
				<FormHR/>
				<FormInput/>
				<FormInputRadio/>
				<FormInputCheckbox/>
				<FormTextarea/>
				<FormSelect/>
				<DarkmodeCheckbox/>
			<Spacing/>
		</React.Fragment>
	)
}

export default AppStyles