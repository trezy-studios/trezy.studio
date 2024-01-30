// Module imports
import { motion } from 'framer-motion'
import { useStore } from 'statery'





// Local imports
import styles from './SiteNav.module.scss'

// import { AuthLinkAndDropdown } from './AuthLinkAndDropdown.jsx'
import { AuthMenu } from './AuthMenu.jsx'
import Image from 'next/image.js'
import LogoImage from '../../../public/logomark.white.png'
import { NavItem } from './NavItem.jsx'
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
		y: '-100%',
		transition: {
			ease: [0.49, 0.38, 0, 1],
			type: 'tween',
		},
	},
}





/**
 * Renders the application navigation.
 *
 * @component
 */
export function SiteNav() {
	const { isApplicationNavVisible } = useStore(store)

	return (
		<motion.div
			animate={isApplicationNavVisible ? 'visible' : 'hidden'}
			className={styles['site-nav-wrapper']}
			exit={'hidden'}
			initial={'hidden'}
			variants={VARIANTS}>
			<div className={styles['brand']}>
				<Image
					alt={'Trezy Studios'}
					aria-hidden
					src={LogoImage}
					width={300} />
			</div>

			<nav className={styles['site-nav']}>
				<NavItem
					href={'/'}
					label={'Home'} />

				<NavItem
					href={'/games'}
					label={'Our Games'} />

				<NavItem
					href={'/blog'}
					label={'Blog'} />

				<NavItem
					href={'/about'}
					label={'About'} />

				<AuthMenu />
			</nav>
		</motion.div>
	)
}
