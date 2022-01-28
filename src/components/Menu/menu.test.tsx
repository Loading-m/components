import React from 'react'
import { render, screen, getByTestId, fireEvent } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
const testProps: MenuProps = {
	defaultIndex: 0,
	onSelect: jest.fn(),
	className: 'test',
}
const testVerticalProps: MenuProps = {
	defaultIndex: 0,
	mode: 'vertical',
}
const generateMenu: React.FC<MenuProps> = (props): React.ReactElement<React.JSXElementConstructor<any>> => {
	return (
		<Menu {...props}>
			<MenuItem index={0}>xyz</MenuItem>
			<MenuItem index={1} disabled>
				cool link 2
			</MenuItem>
			<MenuItem index={2}>cool link 3</MenuItem>
		</Menu>
	)
}
let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
	it('should render correct Menu and MenuItem based on default props', () => {
		// @ts-ignore
		render(generateMenu(testProps))
		let lis = screen.queryAllByTestId('li')
		menuElement = screen.getByTestId('test-menu')
		// activeElement = screen.getByText('is-active')
		// disabledElement = screen.getByText('is-disabled')
		expect(menuElement).toBeInTheDocument()
		expect(menuElement).toHaveClass('viking-menu test')
		expect(lis.length).toEqual(3)
		// expect(activeElement).toHaveClass('menu-item is-active')
		// expect(disabledElement).toHaveClass('menu-item is-disabled')
	})
	it('click items should change active and call the right callback', () => {
		// @ts-ignore
		render(generateMenu(testProps))
		const thirdItem = screen.getByText('xyz')
		fireEvent.click(thirdItem)
		expect(thirdItem).toHaveClass('is-active')
	})
	it('should render vertical mode when mode is set to vertical', () => {
		// @ts-ignore
		render(generateMenu(testVerticalProps))
		menuElement = screen.getByTestId('test-menu')
		expect(menuElement).toHaveClass('menu-vertical')
	})
})
