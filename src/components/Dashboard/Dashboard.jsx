'use client'

// Local imports
import styles from './Dashboard.module.scss'

import { DashboardContent } from './DashboardContent.jsx'
import { DashboardContextProvider } from './DashboardContextProvider.jsx'
import { DashboardNav } from './DashboardNav.jsx'





/**
 * Renders the user dashboard.
 *
 * @component
 */
export function Dashboard() {
	return (
		<DashboardContextProvider>
			<div className={styles['dashboard']}>
				<DashboardNav />
				<DashboardContent />
			</div>
		</DashboardContextProvider>
	)
}
