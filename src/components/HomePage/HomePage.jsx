// Module imports
import {
	faDiscord,
	faGithub,
	faItchIo,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import styles from './HomePage.module.scss'

import { Heading } from '../Heading/Heading.jsx'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logo.dark.png'





export function HomePage() {
	return (
		<div className={styles['page-content']}>
			<Heading>
				<Image
					alt={'debug'}
					src={LogoImage}
					width={500} />
			</Heading>

			<div className={styles['description']}>
				<p>{'We specialize in creating handcrafted gaming experiences which are both unique and immersive. From the characters to the worlds they inhabit, everything is designed and built with the utmost care and attention to detail. Our goal is to transport players into new and exciting world where they can lose themselves in the experience and become part of the story. If you\'re looking for truly one-of-a-kind gaming experiences... we\'ve got you covered.'}</p>
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
		</div>
	)
}
