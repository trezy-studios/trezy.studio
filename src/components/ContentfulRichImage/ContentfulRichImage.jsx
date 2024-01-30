// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { ContentfulImage } from '../ContentfulImage/ContentfulImage.jsx'
import { Link } from '../Link/Link.jsx'





/**
 * Renders an image from Contentful with rich data.
 *
 * @component
 */
export function ContentfulRichImage(props) {
	const {
		className = '',
		data,
		fill,
		isPriority = false,
		showCredits = false,
		sizes,
	} = props

	const {
		caption,
		credits,
		focusArea,
		image,
		link,
	} = data.fields

	const creditsComponent = useMemo(() => {
		if (!credits || !showCredits) {
			return null
		}

		const parsedCredits = credits.reduce((accumulator, credit) => {
			if (credit.fields.photographerName) {
				accumulator.photographer = {
					name: credit.fields.photographerName,
					url: credit.fields.photographerUrl,
				}
			} else if (credit.fields.platformName) {
				accumulator.platform = {
					name: credit.fields.platformName,
					url: credit.fields.platformUrl,
				}
			}
			return accumulator
		}, {})

		return (
			<>
				{'Photo by '}
				<Link href={parsedCredits.photographer.url}>
					{parsedCredits.photographer.name}
				</Link>

				{Boolean(parsedCredits.platform) && (
					<>
						{' on '}
						<Link href={parsedCredits.platform.url}>
							{parsedCredits.platform.name}
						</Link>
					</>
				)}
			</>
		)
	}, [
		credits,
		showCredits,
	])

	const { blurDataURL } = data.metadata

	const alt = data.fields.description ?? image.fields.description
	const title = data.fields.title ?? image.fields.title

	let result = (
		<ContentfulImage
			alt={alt}
			blurDataURL={blurDataURL}
			fill={fill}
			focusArea={focusArea}
			height={image.fields.file.details.image.height}
			isPriority={isPriority}
			// eslint-disable-next-line no-undefined
			placeholder={blurDataURL ? 'blur' : undefined}
			sizes={sizes}
			src={image.fields.file.url}
			title={title}
			width={image.fields.file.details.image.width} />
	)

	if (link) {
		result = (
			<Link href={link}>
				{result}
			</Link>
		)
	}

	return (
		<figure className={className}>
			{result}

			{Boolean(caption ?? creditsComponent) && (
				<figcaption>
					{caption}

					{creditsComponent}
				</figcaption>
			)}
		</figure>
	)
}

ContentfulRichImage.propTypes = {
	className: PropTypes.string,
	data: PropTypes.object.isRequired,
	fill: PropTypes.bool,
	isPriority: PropTypes.bool,
	showCredits: PropTypes.bool,
	sizes: PropTypes.string,
}
