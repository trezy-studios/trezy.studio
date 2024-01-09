// Module imports
import PropTypes from 'prop-types'





// Local imports
import styles from './PageContent.module.scss'





/**
 * Wraps and centers page content.
 *
 * @component
 */
export function PageContent(props) {
	const { children } = props

	return (
		<div className={styles['page-content']}>
			{children}
		</div>
	)
}

PageContent.propTypes = {
	children: PropTypes.node,
}
