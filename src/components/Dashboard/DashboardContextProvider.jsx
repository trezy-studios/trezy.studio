// Module imports
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'
import PropTypes from 'prop-types'




// Constants
/** @typedef {string} TabName */
/** @enum {TabName} */
export const TABS = {
	SUMMARY: 'Summary',
	GAME_KEYS: 'Game Keys',
	CONNECTED_ACCOUNTS: 'Connected Accounts',
}

export const DashboardContext = createContext({
	selectedTab: TABS.SUMMARY,

	/** @type {object | null} */
	user: null,

	/** @type {Function} */
	selectTab: () => {},
})

/**
 * Handles state for all dashboard components.
 *
 * @component
 */
export function DashboardContextProvider(props) {
	const { children } = props

	/** @type {[TABS, *]} */
	const [
		selectedTab,
		setSelectedTab,
	] = useState(TABS.SUMMARY)

	const [user] = useState({ name: 'Trezy' })

	const selectTab = useCallback(
		/**
		 * @param {TABS} tabName The new tab to be selected.
		 */
		tabName => {
			setSelectedTab(TABS[tabName])
		},
		[setSelectedTab],
	)

	const providerValue = useMemo(() => ({
		selectedTab,
		selectTab,
		user,
	}), [
		selectedTab,
		selectTab,
		user,
	])

	return (
		<DashboardContext.Provider value={providerValue}>
			{children}
		</DashboardContext.Provider>
	)
}

DashboardContextProvider.propTypes = {
	children: PropTypes.node,
}

/**
 * Convenience functions for using the dashboard context.
 *
 * @returns {import('react').ContextType<DashboardContext>} The context value.
 */
export function useDashboardContext() {
	return useContext(DashboardContext)
}
