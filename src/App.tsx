import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

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
		</>
	)
}
export default App
