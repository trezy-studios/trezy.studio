'use client'

// Module imports
import {
	useEffect,
	useMemo,
	useRef,
} from 'react'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'
import { useStore } from 'statery'





// Local imports
import styles from './ApplicationNav.module.scss'

import { ContentSummary } from '../ContentSummary/ContentSummary.jsx'
import { hideNav } from '../../store/helpers/hideNav.js'
import { SiteNav } from '../SiteNav/SiteNav.jsx'
import { store } from '../../store/store.js'





/**
 * Renders the application navigation.
 *
 * @component
 */
export function ApplicationNav() {
	const { isApplicationNavVisible } = useStore(store)

	const pathname = usePathname()

	const applicationNavRef = useRef(null)

	const compiledClassName = useMemo(() => {
		return classnames({
			[styles['application-nav']]: true,
			[styles['is-visible']]: isApplicationNavVisible,
		})
	}, [isApplicationNavVisible])

	useEffect(() => {
		hideNav()
	}, [pathname])

	return (
		<div
			ref={applicationNavRef}
			className={compiledClassName}>
			<SiteNav />
			<ContentSummary />
		</div>
	)
}
