// Local imports
import styles from './PageSection.module.scss'





export function PageSection(props) {
	const { children } = props

	return (
		<section className={styles['page-section']}>
			{children}
		</section>
	)
}
