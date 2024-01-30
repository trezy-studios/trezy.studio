// Module imports
import PropTypes from 'prop-types'





// Local imports
import styles from './NavItem.module.scss'

import { Button } from '../Button/Button.jsx'
import { Link } from '../Link/Link.jsx'





/**
 * @component
 * @param {object} props All props.
 * @param {string} [props.href] The URL to which this item links.
 * @param {import('react').ReactNode} props.label The text to display for this item.
 * @param {Function} [props.onClick] A function to be called when the nav item is clicked.
 */
export function NavItem(props) {
	const {
		href,
		label,
		onClick,
	} = props

	const contents = (
		<>
			{label}

			<div
				aria-hidden
				className={styles['hover-effect']}>
				<div className={styles['hover-effect-contents']}>
					{label}
				</div>
			</div>
		</>
	)

	if (href) {
		return (
			<Link
				className={styles['nav-item']}
				href={href}>
				{contents}
			</Link>
		)
	}

	return (
		<Button
			className={styles['nav-item']}
			isLink
			onClick={onClick}>
			{contents}
		</Button>
	)
}

NavItem.propTypes = {
	href: PropTypes.string,
	label: PropTypes.node.isRequired,
	onClick: PropTypes.func,
}
