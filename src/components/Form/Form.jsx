// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Form.module.scss'





/**
 * Renders a form.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {import('react').FormEventHandler} [props.onSubmit] Additional classes to be applied to the component.
 */
export function Form(props) {
	const {
		children,
		className = '',
		onSubmit,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['form'], className)
	}, [className])

	return (
		<form
			className={compiledClassName}
			onSubmit={onSubmit}>
			{children}
		</form>
	)
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onSubmit: PropTypes.func,
}
