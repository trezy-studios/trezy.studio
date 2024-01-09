// Local imports
import {
	TABS,
	useDashboardContext,
} from './DashboardContextProvider.jsx'
import { DashboardConnectedAccounts } from './DashboardConnectedAccounts.jsx'
import { DashboardGameKeys } from './DashboardGameKeys.jsx'
import { DashboardSummary } from './DashboardSummary.jsx'





/**
 * Renders the user dashboard.
 *
 * @component
 */
export function DashboardContent() {
	const { selectedTab } = useDashboardContext()

	if (selectedTab === TABS.SUMMARY) {
		return (
			<DashboardSummary />
		)
	}

	if (selectedTab === TABS.GAME_KEYS) {
		return (
			<DashboardGameKeys />
		)
	}

	if (selectedTab === TABS.CONNECTED_ACCOUNTS) {
		return (
			<DashboardConnectedAccounts />
		)
	}

	return null
}
