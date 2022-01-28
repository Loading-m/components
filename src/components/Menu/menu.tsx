import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
	defaultIndex?: number
	className?: string
	mode?: MenuMode
	style?: React.CSSProperties
	onSelect?: SelectCallback
}
interface IMenuContext {
	index: number
	onSelect?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })
const Menu: React.FC<MenuProps> = ({ className, mode = 'horizontal', style, children, defaultIndex = 0, onSelect }) => {
	const [currentActive, setCurrentActive] = useState(defaultIndex)
	const classes = classNames('viking-menu', className, {
		'menu-vertical': mode === 'vertical',
	})
	const handleClick = (index: number) => {
		setCurrentActive(index)
		onSelect && onSelect(index)
	}
	const passedContext: IMenuContext = {
		index: currentActive ? currentActive : 0,
		onSelect: handleClick,
	}
	return (
		<ul className={classes} style={style} data-testid="test-menu">
			<MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
		</ul>
	)
}
export default Menu
