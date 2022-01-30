import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonSize, ButtonType } from './button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
	btnType: ButtonType.Default,
	children: 'default button',
}
export const SizeButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SizeButton.args = {
	btnType: ButtonType.Primary,
	children: 'large button',
	size: ButtonSize.Large,
}
