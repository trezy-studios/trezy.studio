// Module imports
import { NextSeo as NextSEO } from 'next-seo'
import PropTypes from 'prop-types'





// Local imports
import styles from './PageContent.module.scss'





export function PageContent(props) {
	const {
		children,
		description,
		title,
	} = props

	return (
		<>
			<NextSEO
				description={description}
				title={title} />

			<div className={styles['page-content']}>
				{children}
			</div>
		</>
	)
}

PageContent.defaultProps = {
	children: null,
	description: undefined,
	title: undefined,
}

PageContent.propTypes = {
	children: PropTypes.node,
	description: PropTypes.string,
	title: PropTypes.string,
}
