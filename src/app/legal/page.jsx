// Component imports
import { Link } from '../../components/Link/Link.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'
import { PageSection } from '../../components/PageSection/PageSection.jsx'





/**
 * Renders the index of legal pages.
 *
 * @component
 */
export default function LegalIndex() {
	return (
		<PageContent>
			<PageSection>
				<ul>
					<li>
						<Link href={'/legal/terms-of-service'}>
							{'Terms of Service'}
						</Link>
					</li>

					<li>
						<Link href={'/legal/privacy-policy'}>
							{'Privacy Policy'}
						</Link>
					</li>

					<li>
						<Link href={'/legal/cookie-policy'}>
							{'Cookie Policy'}
						</Link>
					</li>

					<li>
						<Link href={'/legal/code-of-conduct'}>
							{'Code of Conduct'}
						</Link>
					</li>
				</ul>
			</PageSection>
		</PageContent>
	)
}

export const metadata = {
	description: 'Legal Documents',
	title: 'Legal Documents',
}
