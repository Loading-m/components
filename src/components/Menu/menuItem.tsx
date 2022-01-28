import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
export interface MenuItemProps {
	index: number
	disabled?: boolean
	className?: string
	style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = ({ index, disabled, className, style, children }) => {
	const context = useContext(MenuContext)
	const classes = classNames('menu-item', className, {
		'is-disabled': disabled,
		'is-active': context.index === index,
	})
	const handleClick = () => {
		if (context.onSelect && !disabled) {
			context.onSelect(index)
		}
	}
	return (
		<li className={classes} style={style} onClick={handleClick} data-testid="li">
			{children}
		</li>
	)
}
export default MenuItem
