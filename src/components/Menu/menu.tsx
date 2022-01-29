import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export interface MenuProps {
	defaultIndex?: string
	className?: string
	mode?: MenuMode
	style?: React.CSSProperties
	onSelect?: SelectCallback
	defaultOpenSubMenus?: string[]
}
interface IMenuContext {
	index: string
	onSelect?: SelectCallback
	mode?: MenuMode
	defaultOpenSubMenus?: string[]
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = ({ className, mode = 'horizontal', style, children, defaultIndex = '0', onSelect, defaultOpenSubMenus }) => {
	const [currentActive, setCurrentActive] = useState(defaultIndex)
	const classes = classNames('viking-menu', className, {
		'menu-vertical': mode === 'vertical',
		'menu-horizontal': mode !== 'vertical',
	})
	const handleClick = (index: string) => {
		setCurrentActive(index)
		onSelect && onSelect(index)
	}
	const passedContext: IMenuContext = {
		index: currentActive ? currentActive : '0',
		onSelect: handleClick,
		mode,
		defaultOpenSubMenus,
	}
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as React.FunctionComponentElement<MenuItemProps>
			const { displayName } = childElement.type
			if (displayName === 'MenuItem' || displayName === 'SubMenu') {
				return React.cloneElement(childElement, {
					index: index.toString(),
				})
			} else {
				console.error('Warning: Menu has a child which is not a MenuItem or a SubMenu component')
			}
		})
	}
	return (
		<ul className={classes} style={style} data-testid="test-menu">
			<MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
		</ul>
	)
}
export default Menu
