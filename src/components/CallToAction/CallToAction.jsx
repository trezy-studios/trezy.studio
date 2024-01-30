// Module imports
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import { useMemo } from 'react'





// Local imports
import styles from './CallToAction.module.scss'

import { Link } from '../Link/Link.jsx'





/** @typedef {import('@fortawesome/fontawesome-svg-core').IconProp} IconProp */
/**
 * Renders a call to action.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.color] The base color to use for the gradient background.
 * @param {string} props.href The URL to which the button leads.
 * @param {IconProp} [props.icon] The icon to use for the background.
 * @param {object} props.message The message to use for the button.
 */
export function CallToAction(props) {
	const {
		children,
		color,
		href,
		icon,
		message,
	} = props

	const compiledStyles = useMemo(() => {
		/** @type {import('react').CSSProperties} */
		const stylePatch = {}

		if (color) {
			const {
				h: hue,
				s: saturation,
				l: lightness,
			} = tinycolor(color).toHsl()

			stylePatch['--gradient-color-hue'] = Math.round(hue)
			stylePatch['--gradient-color-saturation'] = `${(saturation * 100).toFixed(2)}%`
			stylePatch['--gradient-color-lightness'] = `${(lightness * 100).toFixed(2)}%`
		}

		return stylePatch
	}, [color])

	return (
		<div
			className={styles['call-to-action']}
			style={compiledStyles}>
			{Boolean(icon) && (
				<div className={styles['background-icon']}>
					<FontAwesomeIcon
						fixedWidth
						icon={/** @type {IconProp} */ (icon)} />
				</div>
			)}

			{children}

			<Link
				className={styles['action']}
				href={href}>
				{message}

				<FontAwesomeIcon
					fixedWidth
					icon={faArrowRight} />
			</Link>
		</div>
	)
}

CallToAction.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	href: PropTypes.string.isRequired,
	icon: PropTypes.object,
	message: PropTypes.node.isRequired,
}
