'use client'

// Module imports
import classnames from 'classnames'
import { useMemo } from 'react'
import { useStore } from 'statery'





// Local imports
import styles from './MenuControl.module.scss'

import { Button } from '../Button/Button.jsx'
import { store } from '../../store/store.js'
import { toggleNav } from '../../store/helpers/toggleNav.js'





/**
 * Renders the navigation banner.
 *
 * @component
 */
export function MenuControl() {
	const { isApplicationNavVisible } = useStore(store)

	const compiledMenuControlClassName = useMemo(() => {
		return classnames({
			[styles['menu-control']]: true,
			[styles['is-application-nav-visible']]: isApplicationNavVisible,
		})
	}, [isApplicationNavVisible])

	return (
		<Button
			aria-label={`${isApplicationNavVisible ? 'Hide' : 'Show'} Menu`}
			className={compiledMenuControlClassName}
			onClick={toggleNav} />
	)
}
