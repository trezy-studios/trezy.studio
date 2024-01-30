// Module imports
import PropTypes from 'prop-types'





// Local imports
import styles from './ScreenReaderText.module.scss'





/**
 * Renders text that should only be available to screen readers.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 */
export function ScreenReaderText(props) {
	const { children } = props

	return (
		<div className={styles['screen-reader-text']}>
			{children}
		</div>
	)
}

ScreenReaderText.propTypes = {
	children: PropTypes.node.isRequired,
}
