// Module imports
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './page.module.scss'

import { Content } from '../components/Content/Content.jsx'
import { Heading } from '../components/Heading/Heading.jsx'
import { Hero } from '../components/Hero/Hero.jsx'
import { Link } from '../components/Link/Link.jsx'
import { PageContent } from '../components/PageContent/PageContent.jsx'





/**
 * Renders the home page.
 *
 * @component
 */
export default function Home() {
	return (
		<PageContent>
			<Hero>
				<Heading level={2}>
					{'Indie Visions,'}<br />
					{'Extraordinary Journeys'}
				</Heading>

				<Content className={styles['content']}>
					<p>{'Let us guide you on a journey through extraordinary worlds, where every game is a gateway to captivating stories and adventures unknown.'}</p>
					<p>{'Are you ready for your next unforgettable experience?'}</p>
					<Link
						className={styles['call-to-action-button']}
						href={'/games'}
						isButton
						isPrimary>
						{'Let\'s Go'}
						<FontAwesomeIcon
							fixedWidth
							icon={faArrowRight} />
					</Link>
				</Content>
			</Hero>
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'Welcome to Trezy Studios - Where Imagination Meets Play',
	title: 'Home',
}
