// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'





// Local imports
import styles from './PageContent.module.scss'





/**
 * Wraps and centers page content.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 */
export function PageContent(props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = classnames(styles['page-content'], className)

	return (
		<div className={compiledClassName}>
			{children}
		</div>
	)
}

PageContent.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
