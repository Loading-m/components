import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
library.add(fas)
const App: React.FC = () => {
	return (
		<>
			<Menu
				defaultIndex="0"
				onSelect={(index) => {
					alert(index)
				}}
			>
				<MenuItem>cool link</MenuItem>
				<MenuItem disabled>cool link 2</MenuItem>
				<SubMenu title="dropdown">
					<MenuItem>dropdown 1</MenuItem>
					<MenuItem>dropdown 2</MenuItem>
					<MenuItem>dropdown 3</MenuItem>
				</SubMenu>
				<MenuItem>cool link 3</MenuItem>
			</Menu>
			<Icon icon="arrow-down" theme="primary" size="10x" />
		</>
	)
}
export default App
