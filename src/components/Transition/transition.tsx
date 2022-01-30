import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = {
	classNames?: string
	animation?: AnimationName
	wrapper?: boolean
	unmountOnExit?: boolean
	appear?: boolean
}
type mergedProps = TransitionProps & CSSTransitionProps

const Transition: React.FC<mergedProps> = (props) => {
	const { children, classNames, animation, wrapper, unmountOnExit = true, appear = true, ...restProps } = props
	return (
		<CSSTransition classNames={classNames ? classNames : animation} unmountOnExit={unmountOnExit} appear={appear} {...restProps}>
			{wrapper ? <div>{children}</div> : children}
		</CSSTransition>
	)
}

export default Transition
