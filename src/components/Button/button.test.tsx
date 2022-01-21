import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './button'

describe('test Button component', () => {
	it('should render the correct default button', () => {
		render(<Button>Nice</Button>)
		const element = screen.getByText('Nice')
		expect(screen.getByText('Nice')).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element).toHaveClass('btn btn-default')
	})
	it('should render the correct component based on different props', () => {})
	it('should render a link when btnType equals link and href is provided', () => {})
	it('should render a disabled button when disabled is true', () => {})
})
