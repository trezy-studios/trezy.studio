// Local imports
import { AuthLinkAndDropdown } from './AuthLinkAndDropdown.jsx'
import { GamesLink } from './GamesLink.jsx'
import { HomeLink } from './HomeLink.jsx'
import Image from 'next/image.js'
import LogoImage from '../../../public/logomark.png'
import styles from './Banner.module.scss'





/**
 * Renders the navigation banner.
 *
 * @component
 */
export function Banner() {
	return (
		<header
			className={styles['banner']}
			role={'banner'}>
			<div className={styles['brand']}>
				<Image
					alt={'Trezy Studios logo'}
					src={LogoImage}
					width={50} />
			</div>

			<nav>
				<HomeLink />
				<GamesLink />
				<AuthLinkAndDropdown />
			</nav>
		</header>
	)
}
