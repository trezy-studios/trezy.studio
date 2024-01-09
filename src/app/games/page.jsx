// Module imports
import {
	faItchIo,
	faSteam,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import styles from './page.module.scss'

import DebugLogo from '../../../public/game-media/debug/logo.png'
import { Link } from '../../components/Link/Link.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'
import { PageSection } from '../../components/PageSection/PageSection.jsx'





/**
 * Renders the games page.
 *
 * @component
 */
export default function GamesPage() {
	return (
		<PageContent>
			<PageSection>
				<div className={styles['game-card']}>
					<div className={styles['thumbnail']}>
						<Image
							alt={'Debug logo'}
							className={styles['pixel-art']}
							src={DebugLogo} />
					</div>

					<header className={styles['header']}>
						{'Debug'}
					</header>

					<div className={'description'}>
						<p>{'Take on the role of The Engineer and help The Debugger fix bugs in a complex system. Navigate challenging levels, inspired by Tetris and Sokoban, perfect for flexing your problem-solving skills. Unique storyline, retro graphics, and a relaxing soundtrack.'}</p>
					</div>

					<div className={styles['links']}>
						<Link href={'https://debug.game/'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faGlobe}
								title={'Website'} />
						</Link>

						<Link href={'https://debug.game/steam'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faSteam}
								title={'Steam'} />
						</Link>

						<Link href={'https://debug.game/itch'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faItchIo}
								title={'Itch'} />
						</Link>
					</div>
				</div>
			</PageSection>
		</PageContent>
	)
}

export const metadata = {
	title: 'Our Games',
}
