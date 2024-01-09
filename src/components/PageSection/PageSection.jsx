// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './PageSection.module.scss'





/**
 * Wraps a section of a page.
 *
 * @component
 */
export function PageSection(props) {
	const {
		alignment = 'center',
		children,
		className = '',
		useSmallGaps,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames({
			[styles['page-section']]: true,
			[styles['align-left']]: alignment === 'left',
			[styles['align-right']]: alignment === 'right',
			[styles['use-small-gaps']]: useSmallGaps,
		}, className)
	}, [
		alignment,
		className,
		useSmallGaps,
	])

	return (
		<section className={compiledClassName}>
			{children}
		</section>
	)
}

PageSection.propTypes = {
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
	children: PropTypes.node,
	className: PropTypes.string,
	useSmallGaps: PropTypes.bool,
}
