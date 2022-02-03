import React, { InputHTMLAttributes } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/icon'
type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
	disabled: boolean
	size?: InputSize
	icon?: IconProp
	prepend?: string | React.ReactElement
	append?: string | React.ReactElement
}

export const Input: React.FC<InputProps> = ({ disabled, size, icon, prepend, append, style, ...restProps }) => {
	//取出所有的属性
	//根据属性计算不同的className
	const classes = classNames('viking-input-wrapper', {
		[`input-size-${size}`]: size,
		'is-disabled': disabled,
		'input-group': prepend || append,
		'input-group-append': !!append,
		'input-group-prepend': !!prepend,
	})
	return (
		//根据属性判断是否添加特定的节点
		<div className={classes} style={style}>
			{prepend && <div className="viking-input-group-prepend">{prepend}</div>}
			{icon && (
				<div className="icon-wrapper">
					<Icon icon={icon} title={`title-${icon}`} />
				</div>
			)}
			<input className="viking-input-inner" disabled={disabled} {...restProps} />
			{append && <div className="viking-input-group-append">{append}</div>}
		</div>
	)
}
export default Input
