// Module imports
import {
	useCallback,
	useMemo,
} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'





// Local imports
import styles from './Dashboard.module.scss'

import {
	TABS,
	useDashboardContext,
} from './DashboardContextProvider.jsx'
import { Button } from '../Button/Button.jsx'





/**
 * Renders tab navigation for the dashboard.
 *
 * @component
 */
export function DashboardNavTab(props) {
	const { tabID } = props

	const {
		selectedTab,
		selectTab,
	} = useDashboardContext()

	const handleTabClick = useCallback(() => selectTab(tabID), [
		selectTab,
		tabID,
	])

	const compiledClassName = useMemo(() => {
		const isSelected = selectedTab === TABS[tabID]

		return classnames({
			[styles['dashboard-nav-tab']]: true,
			[styles['is-active']]: isSelected,
		})
	}, [
		selectedTab,
		tabID,
	])

	return (
		<Button
			className={compiledClassName}
			onClick={handleTabClick}>
			{TABS[tabID]}
		</Button>
	)
}

DashboardNavTab.propTypes = {
	tabID: PropTypes.string.isRequired,
}
