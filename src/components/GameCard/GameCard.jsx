// Module imports
import {
	faItchIo,
	faSteam,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './GameCard.module.scss'

import { Content } from '../Content/Content.jsx'
import { faEpicGames } from '../../icons/faEpicGames.js'
import { faGOG } from '../../icons/faGOG.js'
import { faHumbleBundle } from '../../icons/faHumbleBundle.js'
import { Heading } from '../Heading/Heading.jsx'
import { Hero } from '../Hero/Hero.jsx'
import { Link } from '../../components/Link/Link.jsx'
import { parseContentfulNodeFragment } from '../../helpers/parseContentfulNodeFragment.jsx'
import { ScreenReaderText } from '../ScreenReaderText/ScreenReaderText.jsx'





/**
 * Renders a game card.
 *
 * @component
 * @param {object} props All props.
 * @param {import('../../types/ContentfulGame.js').ContentfulGame} props.game The game data.
 */
export function GameCard(props) {
	const { game } = props

	const background = useMemo(() => {
		if (game.fields.heroImage?.fields.file?.url) {
			const description = /** @type {string | undefined} */ (game.fields.heroImage.fields.description)
			const title = /** @type {string | undefined} */ (game.fields.heroImage.fields.title)

			return (
				<Image
					alt={description ?? ''}
					fill
					src={`https:${game.fields.heroImage.fields.file.url}`}
					title={title} />
			)
		}

		return null
	}, [game])

	const logo = useMemo(() => {
		if (game.fields.logo?.fields.file?.url) {
			const description = /** @type {string | undefined} */ (game.fields.logo.fields.description)
			const title = /** @type {string | undefined} */ (game.fields.logo.fields.title)

			return (
				<div className={styles['logo']}>
					<Image
						alt={description ?? ''}
						fill
						src={`https:${game.fields.logo.fields.file.url}`}
						title={title} />
				</div>
			)
		}

		return null
	}, [game])

	const content = useMemo(() => (
		<Content className={styles['content']}>
			{parseContentfulNodeFragment(game.fields.description)}
		</Content>
	), [game])

	const compiledStyles = useMemo(() => {
		const stylesPatch = {
			'--background-color': game.fields.backgroundColor,
			'--text-color': game.fields.textColor,
		}

		return /** @type {import('react').CSSProperties} */ (stylesPatch)
	}, [game])

	return (
		<Hero
			background={background}
			contentClassName={styles['game-card']}
			style={compiledStyles}>
			<Heading
				className={styles['heading']}
				level={3}>
				{logo}

				{Boolean(logo) && (
					<ScreenReaderText>
						{game.fields.name}
					</ScreenReaderText>
				)}

				{!logo && game.fields.name}
			</Heading>

			{content}

			<div className={styles['links']}>
				{(typeof game.fields.steamURL === 'string') && (
					<Link href={game.fields.steamURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSteam}
							title={`${game.fields.name} on Steam`} />
					</Link>
				)}

				{(typeof game.fields.epicGamesURL === 'string') && (
					<Link href={game.fields.epicGamesURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faEpicGames}
							title={`${game.fields.name} on Epic Games Store`} />
					</Link>
				)}

				{(typeof game.fields.gogURL === 'string') && (
					<Link href={game.fields.gogURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGOG}
							title={`${game.fields.gogURL} on GOG`} />
					</Link>
				)}

				{(typeof game.fields.itchURL === 'string') && (
					<Link href={game.fields.itchURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faItchIo}
							title={`${game.fields.name} on Itch`} />
					</Link>
				)}

				{(typeof game.fields.humbleBundleURL === 'string') && (
					<Link href={game.fields.humbleBundleURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faHumbleBundle}
							title={`${game.fields.name} on Humble Store`} />
					</Link>
				)}

				{(typeof game.fields.websiteURL === 'string') && (
					<Link href={game.fields.websiteURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGlobe}
							title={`${game.fields.name} Website`} />
					</Link>
				)}
			</div>
		</Hero>
	)
}

GameCard.propTypes = {
	game: PropTypes.object.isRequired,
}
