import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import styled from 'styled-components'

import LogoExtraDutyStacked from '../../../app/icons/brand/extraduty/LogoExtraDutyStacked'
import IconUserCog from '../../../app/icons/user/IconUserCog'
import IconCogs from '../../../app/icons/admin/IconCogs'

const AdminNavigation = () => {

    const appstate = useSelector(state => state.appstateReducer)
    const dispatch = useDispatch()

    const getModuleValue = (moduleName) => {
        let wrapper = document.getElementById('workspace-screen');
        wrapper.classList.toggle('is-submodule-open');
        dispatch({ type: 'GET_MODULE_VAL', _value:moduleName });
    }

    const getModuleAppValue = (moduleapp) => {
      let wrapper = document.getElementById('workspace-screen');
      wrapper.classList.add('is-submodule-selected');
      wrapper.classList.remove('is-submodule-open');
      wrapper.classList.remove('is-side-open');
      dispatch({ type: 'GET_MODULEAPP_VAL', _value:moduleapp });
    }

		return (
			<StyledNav className="App-AdminNavigation">
        <ul className="module-list">
          <li>
            <Link to="/" onClick={()=>getModuleValue('liquidapps')}>
              <LogoExtraDutyStacked/>
              <span>Liquid Apps</span>
            </Link>
            <div className={appstate.valModule === module.name ? 'submodule-nav active': 'submodule-nav'}>
                <div className="submodule-inner">
                  <h3>Liquid Apps</h3>
                  <ul className="submodule-list">
                    <li className={(appstate.valModuleapp === 'liquiddashboard') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('liquiddashboard')}>
                        <IconUserCog/>
                        <div>Dashboard</div>
                      </Link>
                    </li>
                    <li className={(appstate.valModuleapp === 'todoapp') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('todoapp')}>
                        <IconUserCog/>
                        <div>Todo app</div>
                      </Link>
                    </li>
                    <li className={(appstate.valModuleapp === 'chatapp') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('chatapp')}>
                        <IconCogs/>
                        <div>Chat app</div>
                      </Link>
                    </li>
                    <li className={(appstate.valModuleapp === 'formelements') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('formelements')}>
                        <IconCogs/>
                        <div>Form Elements</div>
                      </Link>
                    </li>
                    <li className={(appstate.valModuleapp === 'counterapp') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('counterapp')}>
                        <IconCogs/>
                        <div>Counter App</div>
                      </Link>
                    </li>
                    <li className={(appstate.valModuleapp === 'videoapp') ? 'active' : ''}>
                      <Link to="/" onClick={()=>getModuleAppValue('videoapp')}>
                        <IconCogs/>
                        <div>Video App</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </li>
        </ul>
			</StyledNav>
		)
	
}

export default AdminNavigation

const StyledNav = styled.nav`
  .submodule-inner {
    h3 { color: ${props => props.theme.AppNavPanel.anchorColor} }
  }
	ul {
		li {
			a {
				color: ${props => props.theme.AppNavPanel.anchorColor};
				background-color: ${props => props.theme.AppNavPanel.listItemBG};
        svg#logo-extraduty-stacked { fill: ${props => props.theme.AppNavPanel.logoExtraDutyFill}; }
        svg#logo-onduty { fill: ${props => props.theme.AppNavPanel.logoOnDutyFill}; }
				&:hover { 
					color:  ${props => props.theme.AppNavPanel.anchorColorHover};
					background-color: ${props => props.theme.AppNavPanel.listItemBGHover};
					box-shadow: ${props => props.theme.AppNavPanel.boxShadowHover};
          svg#logo-extraduty-stacked { fill: ${props => props.theme.AppNavPanel.logoExtraDutyFillHover}; }
          svg#logo-onduty { fill: ${props => props.theme.AppNavPanel.logoOnDutyFillHover}; }
				}
			}
		}
	}
`