import React from 'react'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
const App: React.FC = () => {
	return (
		<>
			<Menu
				mode="vertical"
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
		</>
	)
}
export default App
