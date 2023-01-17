// Module imports
import {
	faItchIo,
	faSteam,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import styles from './GamesPage.module.scss'

import DebugLogo from '../../../public/game-media/debug/logo.png'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'
import { Link } from '../Link/Link.jsx'





export function GamesPage() {
	return (
		<PageContent>
			<PageSection>
				<div className={styles['game-card']}>
					<div className={styles['thumbnail']}>
						<Image
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
								title={'Website'}
								fixedWidth
								icon={faGlobe} />
						</Link>

						<Link href={'https://debug.game/steam'}>
							<FontAwesomeIcon
								title={'Steam'}
								fixedWidth
								icon={faSteam} />
						</Link>

						<Link href={'https://debug.game/itch'}>
							<FontAwesomeIcon
								title={'Itch'}
								fixedWidth
								icon={faItchIo} />
						</Link>
					</div>
				</div>
			</PageSection>
		</PageContent>
	)
}
