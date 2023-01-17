// Local imports
import styles from './PageContent.module.scss'





export function PageContent(props) {
	const { children } = props

	return (
		<div className={styles['page-content']}>
			{children}
		</div>
	)
}
