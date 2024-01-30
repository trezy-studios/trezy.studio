'use client'

// Module imports
import {
	faCheck,
	faX,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'





// Local imports
import styles from './CreateAccountForm.module.scss'





/**
 * Renders the login page.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {true | false | null} [props.isValid] A trinary state representing whether the requirment is valid, invalid, or has no validity.
 */
export function Requirement(props) {
	const {
		children,
		isValid,
	} = props

	return (
		<li
			className={classnames({
				[styles['is-valid']]: isValid === true,
				[styles['is-invalid']]: isValid === false,
			})}>
			{(isValid === null) && (
				<FontAwesomeIcon
					fixedWidth
					icon={faCircle} />
			)}
			{(isValid === false) && (
				<FontAwesomeIcon
					fixedWidth
					icon={faX} />
			)}
			{(isValid === true) && (
				<FontAwesomeIcon
					fixedWidth
					icon={faCheck} />
			)}
			{children}
		</li>
	)
}

Requirement.propTypes = {
	children: PropTypes.node,
	isValid: PropTypes.oneOf([
		true,
		false,
		null,
	]),
}
