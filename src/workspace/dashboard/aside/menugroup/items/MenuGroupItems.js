import React, { Component } from 'react'
import IconFolder from '../../../../../app/icons/menu/IconFolder'

class MenuGroupItems extends Component {
	render() {
		return (
			<nav className="Module-menugroupitems">
        <ul className="Menus-workflows">
          <li><a href="/"><IconFolder/><span>Menugroup1</span></a></li>
          <li><a href="/"><IconFolder/><span>Menugroup2</span></a></li>
          <li><a href="/"><IconFolder/><span>Menugroup3</span></a></li>
        </ul>
			</nav>
		)
	}
}

export default MenuGroupItems
