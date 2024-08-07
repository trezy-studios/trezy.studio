// Module imports
import buttonStyles from '../Button/Button.module.scss'
import styles from './Link.module.scss'

import classnames from 'classnames'
import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { ExternalLink } from '../ExternalLink/ExternalLink.jsx'





/**
 * Handles ambiguous links, wrapping them with whichever component is most appropriate.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {boolean} [props.isAuxiliary] Whether or not this link is used for an auxiliary action (only valid if `isButton` is true).
 * @param {boolean} [props.isButton] Whether or not this component should look like a button.
 * @param {boolean} [props.isLink] Whether or not this link should look like a link (only valid if `isButton` is true).
 * @param {boolean} [props.isPrimary] Whether or not this link is used for a primary action (only valid if `isButton` is true).
 * @param {boolean} [props.isSecondary] Whether or not this link is used for a secondary action (only valid if `isButton` is true).
 * @param {string} props.href The URL to which this link leads.
 */
export function Link(props) {
	const {
		children,
		className = '',
		href,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
		isSecondary,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(className, styles['link'], {
			[buttonStyles['button']]: isButton,
			[buttonStyles['is-auxiliary']]: isButton && isAuxiliary,
			[buttonStyles['is-link']]: isButton && isLink,
			[buttonStyles['is-primary']]: isButton && isPrimary,
			[buttonStyles['is-secondary']]: isButton && isSecondary,
		})
	}, [
		className,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
		isSecondary,
	])

	// eslint-disable-next-line security/detect-unsafe-regex
	if (/^(?:https?:)?\/\//u.test(href)) {
		return (
			<ExternalLink
				className={compiledClassName}
				href={href}>
				{children}
			</ExternalLink>
		)
	}

	return (
		<NextLink
			className={compiledClassName}
			href={href}>
			{children}
		</NextLink>
	)
}

Link.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	isAuxiliary: PropTypes.bool,
	isButton: PropTypes.bool,
	isLink: PropTypes.bool,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
}
