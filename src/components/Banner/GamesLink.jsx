// Module imports
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Banner.module.scss'

import { Link } from '../Link/Link.jsx'





/** @component */
export function GamesLink() {
	return (
		<Link href={'/games'}>
			<div className={styles['icon']}>
				<FontAwesomeIcon
					fixedWidth
					icon={faGamepad}
					size={'xs'} />
			</div>

			<div className={styles['label']}>
				{'Games'}
			</div>
		</Link>
	)
}
