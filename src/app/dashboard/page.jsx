// Local imports
import { Dashboard } from '../../components/Dashboard/Dashboard.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'





/**
 * Renders the user dashboard.
 *
 * @component
 */
export default function DashboardPage() {
	return (
		<PageContent>
			<Dashboard />
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	title: 'Dashboard',
}
