// Style imports
import buttonStyles from '../Button/Button.module.scss'
import styles from './Link.module.scss'





// Module imports
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
 */
export function Link(props) {
	const {
		children,
		className,
		href,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(className, styles['link'], {
			[buttonStyles.button]: isButton,
			[buttonStyles['is-auxiliary']]: isButton && isAuxiliary,
			[buttonStyles['is-link']]: isButton && isLink,
			[buttonStyles['is-primary']]: isButton && isPrimary,
		})
	}, [
		className,
		isAuxiliary,
		isButton,
		isLink,
		isPrimary,
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

Link.defaultProps = {
	children: null,
	className: '',
	isAuxiliary: false,
	isButton: false,
	isLink: false,
	isPrimary: false,
}

Link.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	isAuxiliary: PropTypes.bool,
	isButton: PropTypes.bool,
	isLink: PropTypes.bool,
	isPrimary: PropTypes.bool,
}
