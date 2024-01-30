// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Content.module.scss'





/**
 * Renders inline content.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 */
export function Content(props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = useMemo(() => classnames(styles['content'], className), [className])

	return (
		<div className={compiledClassName}>
			{children}
		</div>
	)
}

Content.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
