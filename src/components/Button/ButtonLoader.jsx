'use client'

// Style imports
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'





// Module imports
import styles from './Button.module.scss'





// Constants
const VARIANTS = {
	hidden: {
		opacity: 0,
		x: 20,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
}





/**
 * Renders a button.
 *
 * @component
 * @param {object} props All props
 * @param {boolean} [props.isLoading] Whether the loading state is currently active.
 */
export function ButtonLoader(props) {
	const { isLoading } = props

	return (
		<motion.span
			animate={isLoading ? 'visible' : 'hidden'}
			className={styles['loader']}
			initial={'hidden'}
			variants={VARIANTS}>
			<FontAwesomeIcon
				fixedWidth
				icon={faSpinner}
				spinPulse />
		</motion.span>
	)
}

ButtonLoader.propTypes = {
	/** Whether or not this component is in a loading state. */
	isLoading: PropTypes.bool,
}
