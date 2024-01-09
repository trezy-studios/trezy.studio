// Module imports
import { useMemo } from 'react'





// Local imports
import styles from './Dashboard.module.scss'

import { DashboardNavTab } from './DashboardNavTab.jsx'
import { TABS } from './DashboardContextProvider.jsx'





/**
 * Renders tab navigation for the dashboard.
 *
 * @component
 */
export function DashboardNav() {
	const mappedTabs = useMemo(() => {
		return Object
			.keys(TABS)
			.map(tabID => (
				<li key={tabID}>
					<DashboardNavTab tabID={tabID} />
				</li>
			))
	}, [])

	return (
		<ul className={styles['dashboard-nav']}>
			{mappedTabs}
		</ul>
	)
}
