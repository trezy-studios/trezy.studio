// Module imports
import {
	faGamepad,
	faHome,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import Image from 'next/image.js'
import { Link } from '../Link/Link.jsx'
import LogoImage from '../../../public/logomark.png'
import styles from './Banner.module.scss'





export function Banner() {
	return (
		<header
			className={styles['banner']}
			role={'banner'}>
			<Image
				alt={'Trezy Studios logo'}
				src={LogoImage}
				width={50} />

			<nav>
				<Link href={'/'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faHome}
						size={'xs'} />

					{'Home'}
				</Link>

				<Link href={'/games'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faGamepad}
						size={'xs'} />

					{'Games'}
				</Link>
			</nav>
		</header>
	)
}
