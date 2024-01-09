// Module imports
import {
	faDiscord,
	faSteam,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useStore } from 'statery'





// Local imports
import styles from './ContentSummary.module.scss'

import { Link } from '../Link/Link.jsx'
import { store } from '../../store/store.js'





// Constants
const VARIANTS = {
	visible: {
		y: '0%',
		transition: {
			ease: [0.49, 0.38, 0, 1],
			type: 'tween',
		},
	},
	hidden: {
		y: '100%',
		transition: {
			ease: [0.49, 0.38, 0, 1],
			type: 'tween',
		},
	},
}





/**
 * Renders the content summary.
 *
 * @component
 */
export function ContentSummary() {
	const { isApplicationNavVisible } = useStore(store)

	return (
		<motion.div
			animate={isApplicationNavVisible ? 'visible' : 'hidden'}
			className={styles['content-summary-wrapper']}
			exit={'hidden'}
			initial={'hidden'}
			variants={VARIANTS}>
			<div className={styles['content-summary']}>
				<div className={styles['articles']}>
					<Link href={'/blog/article'}>
						<article>
							<time>{'Monday, 30 October, 2024'}</time>

							<header>
								{'This is an article'}
							</header>
						</article>
					</Link>

					<Link href={'/blog/article'}>
						<article>
							<time>{'Monday, 22 September, 2023'}</time>

							<header>
								{'This is another article'}
							</header>
						</article>
					</Link>
				</div>

				<div className={styles['social-links']}>
					<Link
						className={styles['discord']}
						href={'/discord'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faDiscord} />
					</Link>

					<Link
						className={styles['steam']}
						href={'/steam'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSteam} />
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
				</div>
			</div>
		</motion.div>
	)
}
