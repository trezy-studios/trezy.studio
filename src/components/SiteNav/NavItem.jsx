// Module imports
import PropTypes from 'prop-types'





// Local imports
import styles from './SiteNav.module.scss'

import { Link } from '../Link/Link.jsx'





/**
 * @component
 * @param {object} props All props.
 * @param {string} props.href The URL to which this item links.
 * @param {import('react').ReactNode} props.label The text to display for this item.
 */
export function NavItem(props) {
	const {
		href,
		label,
	} = props

	return (
		<Link
			className={styles['nav-item']}
			href={href}>
			{label}

			<div
				aria-hidden
				className={styles['hover-effect']}>
				<div className={styles['hover-effect-contents']}>
					{label}
				</div>
			</div>
		</Link>
	)
}

NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	label: PropTypes.node.isRequired,
}
