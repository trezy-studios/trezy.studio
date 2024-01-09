// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Table.module.scss'





/**
 *
 * @component
 */
export function Table(props) {
	const {
		children,
		className = '',
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['table'], className)
	}, [className])

	return (
		<table className={compiledClassName}>
			{children}
		</table>
	)
}

Table.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
