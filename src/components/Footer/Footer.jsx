// Module imports
import {
	faDiscord,
	faGithub,
	faItchIo,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Footer.module.scss'

import { Link } from '../Link/Link.jsx'





export function Footer() {
	return (
		<footer className={styles['footer']}>
			<small>
				{`© ${new Date().getFullYear()} Trezy Studios, LLC. All rights reserved.`}
			</small>

			<div className={styles['social-links']}>
				<Link
					className={styles['discord']}
					href={'/discord'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faDiscord} />
				</Link>

				<Link
					className={styles['youtube']}
					href={'/youtube'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faYoutube} />
				</Link>

				<Link
					className={styles['steam']}
					href={'/steam'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faSteam} />
				</Link>

				<Link
					className={styles['itch']}
					href={'/itch'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faItchIo} />
				</Link>

				<Link
					className={styles['github']}
					href={'/github'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faGithub} />
				</Link>
			</div>
		</footer>
	)
}
