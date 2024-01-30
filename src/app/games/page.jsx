// Local imports
import styles from './page.module.scss'

import {
	Hero,
	SIZES,
} from '../../components/Hero/Hero.jsx'
import { Content } from '../../components/Content/Content.jsx'
// import { DiscordCallToAction } from '../../components/DiscordCallToAction/DiscordCallToAction.jsx'
import { GameCard } from '../../components/GameCard/GameCard.jsx'
import { Heading } from '../../components/Heading/Heading.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'
import * as Contentful from '../../helpers/Contentful.js'





/**
 * Renders the games page.
 *
 * @component
 */
export default async function GamesPage() {
	const games = await Contentful.getGames()

	const mappedGames = games.map(game => (
		<GameCard
			key={game.sys.id}
			game={game} />
	))

	return (
		<PageContent className={styles['page']}>
			<Hero size={SIZES.MOST}>
				<Content>
					<Heading level={2}>
						{'Our Games'}
					</Heading>

					<p>{'Explore the unique worlds we\'ve created at Trezy Studios! Each game is a window into a story untold, an adventure waiting to be had.'}</p>
				</Content>
			</Hero>

			{mappedGames}
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'A Universe of Unforgettable Experiences',
	title: 'Our Games',
}
