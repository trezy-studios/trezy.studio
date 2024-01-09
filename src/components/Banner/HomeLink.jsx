// Module imports
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Banner.module.scss'

import { Link } from '../Link/Link.jsx'





/** @component */
export function HomeLink() {
	return (
		<Link href={'/'}>
			<div className={styles['icon']}>
				<FontAwesomeIcon
					fixedWidth
					icon={faHome}
					size={'xs'} />
			</div>

			<div className={styles['label']}>
				{'Home'}
			</div>
		</Link>
	)
}
