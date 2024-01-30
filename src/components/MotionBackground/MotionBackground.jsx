'use client'

// Module imports
import { motion } from 'framer-motion'
import { useRef } from 'react'





// Local imports
import styles from './MotionBackground.module.scss'





// Constants
const VARIANTS = {
	animate: { opacity: 0.5 },
	exit: { opacity: 0 },
	initial: { opacity: 0 },
}





/**
 * Renders the vignette.
 *
 * @component
 */
export function MotionBackground() {
	/** @type {import('react').Ref<HTMLVideoElement>} */
	const videoRef = useRef(null)

	return (
		<motion.video
			ref={videoRef}
			animate={'animate'}
			autoPlay
			className={styles['motion-background']}
			controls={false}
			exit={'exit'}
			initial={'initial'}
			loop
			muted
			preload={'auto'}
			src={'backgrounds/abstract-background_2.webm'}
			variants={VARIANTS} />
	)
}
