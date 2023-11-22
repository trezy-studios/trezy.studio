// Component imports
import { Link } from '../Link/Link.jsx'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





export function LegalIndexPage() {
	return (
		<PageContent
			description={'Legal Documents'}
			title={'Legal Documents'}>
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
