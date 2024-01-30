// Module imports
import classnames from 'classnames'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders an article with its summary.
 *
 * @component
 */
export function ArticleStub(props) {
	const {
		className = '',
	} = props

	const compiledClassName = useMemo(() => classnames(className), [className])

	return (
		<article className={compiledClassName}>
			<Image
				alt={''}
				height={180}
				src={'/images/2022-05-17-building-a-new-community-header-image.png'}
				width={1100 / 3} />

			<header>
				<h3>{'Building a New Community'}</h3>
			</header>

			<p>{'We\'re moving our community from Slack to Discord, but... why? We\'ll answer all of your questions and more!'}</p>
		</article>
	)
}

ArticleStub.propTypes = {
	className: PropTypes.string,
}
