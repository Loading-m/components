import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
const App: React.FC = () => {
	return (
		<>
			<Button autoFocus size={ButtonSize.Small}>
				Hello
			</Button>
			<Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
				Hello
			</Button>
			<Button btnType={ButtonType.Link} href="http://www.baidu.com">
				Baidu
			</Button>
			<Menu
				mode="vertical"
				defaultIndex={0}
				onSelect={(index) => {
					alert(index)
				}}
			>
				<MenuItem index={0}>cool link</MenuItem>
				<MenuItem index={1} disabled>
					cool link 2
				</MenuItem>
				<MenuItem index={2}>cool link 3</MenuItem>
			</Menu>
		</>
	)
}
export default App
