'use client'

// Module imports
import { motion } from 'framer-motion'
import { useStore } from 'statery'





// Local imports
import styles from './Banner.module.scss'

import Image from 'next/image.js'
import LogoImage from '../../../public/logomark.blue.png'
import { MenuControl } from '../MenuControl/MenuControl.jsx'
import { store } from '../../store/store.js'





// Constants
const LOGO_VARIANTS = {
	visible: {
		x: '0%',
		transition: {
			ease: [0.49, 0.38, 0, 1],
			type: 'tween',
		},
	},
	hidden: {
		x: '-100%',
		transition: {
			ease: [0.49, 0.38, 0, 1],
			type: 'tween',
		},
	},
}





/**
 * Renders the navigation banner.
 *
 * @component
 */
export function Banner() {
	const { isApplicationNavVisible } = useStore(store)

	return (
		<header
			className={styles['banner']}
			role={'banner'}>
			<motion.h1
				animate={isApplicationNavVisible ? 'hidden' : 'visible'}
				className={styles['brand']}
				variants={LOGO_VARIANTS}>
				<Image
					alt={'Trezy Studios'}
					aria-hidden
					src={LogoImage}
					width={50} />
			</motion.h1>

			<MenuControl />
		</header>
	)
}
