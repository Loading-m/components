import React from 'react'
import { makeDecorator } from '@storybook/addons'
const styles = {
	textAlign: 'center',
}
export default makeDecorator({
	name: 'makeCenter',
	wrapper: (storyFn, context, { parameters }) => {
		return <div style={styles}>{storyFn(context)}</div>
	},
})
