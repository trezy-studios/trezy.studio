// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Input.module.scss'




/**
 * Renders an input field.
 *
 * @component
 * @param {object} props All props.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {string} [props.defaultValue] The default value of the input.
 * @param {import('react').ChangeEventHandler} [props.onChange] Fnuction to be called when the value of the input changes.
 * @param {string} [props.placeholder] Placeholder text to be displayed for an empty input.
 * @param {'email' | 'password' | 'text'} [props.type] The input type.
 * @param {string} [props.value] The current value of the input.
 */
export function Input(props) {
	const {
		className,
		defaultValue,
		onChange,
		placeholder,
		type = 'text',
		value,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['input'], className)
	}, [className])

	return (
		<input
			className={compiledClassName}
			defaultValue={defaultValue}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			value={value} />
	)
}

Input.propTypes = {
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf([
		'email',
		'password',
		'text',
	]),
	value: PropTypes.string,
}
