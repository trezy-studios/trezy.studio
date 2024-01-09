// Module imports
import {
	faDiscord,
	faGithub,
	faItchIo,
	faSteam,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './Footer.module.scss'

import { faHumbleBundle } from '../../icons/faHumbleBundle.js'
import { Link } from '../Link/Link.jsx'





/**
 * Renders the site footer.
 *
 * @component
 */
export function Footer() {
	return (
		<footer className={styles['footer']}>
			<small>
				{`© ${(new Date).getFullYear()} Trezy Studios, LLC. All rights reserved.`}
				<br />

				<Link href={'/legal/terms-of-service'}>
					{'Terms of Service'}
				</Link>

				{' | '}

				<Link href={'/legal/privacy-policy'}>
					{'Privacy Policy'}
				</Link>

				{' | '}

				<Link href={'/legal/cookie-policy'}>
					{'Cookie Policy'}
				</Link>

				{' | '}

				<Link href={'/legal/code-of-conduct'}>
					{'Code of Conduct'}
				</Link>
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
					className={styles['twitter']}
					href={'/twitter'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faTwitter} />
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
					className={styles['humble-bundle']}
					href={'/humble-bundle'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faHumbleBundle} />
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
