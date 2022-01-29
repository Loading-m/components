import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
const testProps: MenuProps = {
	defaultIndex: '0',
	onSelect: jest.fn(),
	className: 'test',
}
const testVerticalProps: MenuProps = {
	defaultIndex: '0',
	mode: 'vertical',
}
const generateMenu: React.FC<MenuProps> = (props): React.ReactElement<React.JSXElementConstructor<any>> => {
	return (
		<Menu {...props}>
			<MenuItem>123</MenuItem>
			<MenuItem disabled>cool link 2</MenuItem>
			<MenuItem>xyz</MenuItem>
			<SubMenu title="dropdown">
				<MenuItem>drop1</MenuItem>
			</SubMenu>
		</Menu>
	)
}
const createStyleFile = () => {
	const cssFile: string = `
		.viking-submenu {
			display: none;
		}
		.viking-submenu.menu-opened {
			display: block;
		}
	`
	const style = document.createElement('style')
	style.type = 'text/css'
	style.innerHTML = cssFile
	return style
}
let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
	it('should render correct Menu and MenuItem based on default props', () => {
		// @ts-ignore
		render(generateMenu(testProps))
		let lis = screen.queryAllByTestId('li')
		menuElement = screen.getByTestId('test-menu')
		// @ts-ignore
		activeElement = screen.getByText((_, element) => {
			if (element) {
				return element.tagName.toLowerCase() === 'li' && element.classList.contains('is-active')
			}
		})
		// @ts-ignore
		disabledElement = screen.getByText((_, element) => {
			if (element) {
				return element.tagName.toLowerCase() === 'li' && element.classList.contains('is-disabled')
			}
		})
		expect(menuElement).toBeInTheDocument()
		expect(menuElement).toHaveClass('viking-menu test')
		expect(lis.length).toEqual(4)
		expect(activeElement).toHaveClass('menu-item is-active')
		expect(disabledElement).toHaveClass('menu-item is-disabled')
	})
	it('click items should change active and call the right callback', () => {
		// @ts-ignore
		render(generateMenu(testProps))
		// @ts-ignore
		activeElement = screen.getByText((_, element) => {
			if (element) {
				return element.tagName.toLowerCase() === 'li' && element.classList.contains('is-active')
			}
		})
		// @ts-ignore
		disabledElement = screen.getByText((_, element) => {
			if (element) {
				return element.tagName.toLowerCase() === 'li' && element.classList.contains('is-disabled')
			}
		})
		const thirdItem = screen.getByText('xyz')
		fireEvent.click(thirdItem)
		expect(thirdItem).toHaveClass('menu-item is-active')
		fireEvent.click(disabledElement)
		expect(disabledElement).not.toHaveClass('is-active')
		expect(testProps.onSelect).not.toHaveBeenNthCalledWith(1, '1')
	})
	it('should render vertical mode when mode is set to vertical', () => {
		// @ts-ignore
		render(generateMenu(testVerticalProps))
		menuElement = screen.getByTestId('test-menu')
		expect(menuElement).toHaveClass('menu-vertical')
	})
	it('should show dropdown items when hover on subMenu', async () => {
		// @ts-ignore
		let view = render(generateMenu(testProps))
		view.container.append(createStyleFile())
		expect(screen.queryByText('drop1')).not.toBeVisible()
		const dropdownElement = screen.getByText('dropdown')
		fireEvent.mouseEnter(dropdownElement)

		await waitFor(() => {
			expect(screen.queryByText('drop1')).toBeVisible()
		})
		fireEvent.click(screen.getByText('drop1'))
		expect(testProps.onSelect).toHaveBeenNthCalledWith(1, '3-0')
	})
})
