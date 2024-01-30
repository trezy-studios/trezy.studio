// Local imports
import { Content } from '../../components/Content/Content.jsx'
import { DiscordCallToAction } from '../../components/DiscordCallToAction/DiscordCallToAction.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'
import { PageSection } from '../../components/PageSection/PageSection.jsx'





/**
 * Renders the home page.
 *
 * @component
 */
export default function Home() {
	return (
		<PageContent>
			<PageSection>
				<Content>
					{/* <p className={styles['subheading']}>{'We\'re Trezy Studios.'}</p> */}

					<p>{'At Trezy Studios, our mission is both simple and profound: to create games that aren\'t just played, but cherished. Rooted in principles of fairness, transparency, and the joy of gaming, we\'re more than a studio - we\'re storytellers, dreamers, and pioneers.'}</p>

					<p>{'Embracing web technologies, we\'re not just pushing the boundaries of game development; we\'re reimagining them for everyone. We believe in making games that we\'re passionate about, ensuring that each title is infused with creativity and care.'}</p>

					<DiscordCallToAction>
						<p>{'Connect with us on Discord and help us shape a world where every game is an experience, every player is valued, and every moment is an opportunity for delight.'}</p>
					</DiscordCallToAction>
				</Content>
			</PageSection>
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'Crafting Joy, One Game at a Time',
	title: 'About Us',
}
