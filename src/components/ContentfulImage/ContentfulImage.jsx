'use client'

// Module imports
import {
	useCallback,
	useMemo,
} from 'react'
import Image from 'next/image.js'
import PropTypes from 'prop-types'





/**
 * Renders an image from Contentful.
 *
 * @component
 */
export function ContentfulImage(props) {
	const {
		alt,
		blurDataURL = '',
		fill = false,
		fit,
		focusArea,
		height,
		isPriority = false,
		placeholder = 'empty',
		sizes,
		src,
		title = '',
		width,
	} = props

	const loader = useCallback(loaderProps => {
		const {
			quality,
			width: loaderWidth,
		} = loaderProps

		const url = new URL(`https:${src}`)

		url.searchParams.set('fm', 'webp')
		url.searchParams.set('w', loaderWidth.toString())
		url.searchParams.set('q', (quality || 75).toString())

		if (fit) {
			url.searchParams.set('fit', fit)
		}

		if (focusArea) {
			url.searchParams.set('f', focusArea.toLowerCase().replace(/\s/u, '_'))
		}

		return url.href
	}, [
		fit,
		focusArea,
		src,
	])

	const compiledImageStyles = useMemo(() => ({
		aspectRatio: `${width} / ${height}`,
		height: '100%',
		objectFit: 'cover',
		width: '100%',
	}), [
		height,
		width,
	])

	const compiledWrapperStyles = useMemo(() => ({
		aspectRatio: `${width} / ${height}`,
		display: 'flex',
		height: '100%',
		width: '100%',
	}), [
		height,
		width,
	])

	return (
		<div style={compiledWrapperStyles}>
			<Image
				alt={alt}
				blurDataURL={blurDataURL}
				fill={fill}
				// eslint-disable-next-line no-undefined
				height={!fill ? height : undefined}
				loader={loader}
				placeholder={placeholder}
				priority={isPriority}
				sizes={sizes}
				src={src}
				// @ts-expect-error Next.js's CSS types for `object-fit` are garbo, so... 🤷🏻‍♂️
				style={compiledImageStyles}
				title={title}
				// eslint-disable-next-line no-undefined
				width={!fill ? width : undefined} />
		</div>
	)
}

ContentfulImage.propTypes = {
	alt: PropTypes.string.isRequired,
	blurDataURL: PropTypes.string,
	fill: PropTypes.bool,
	fit: PropTypes.string,
	focusArea: PropTypes.string,
	height: PropTypes.number,
	isPriority: PropTypes.bool,
	placeholder: PropTypes.string,
	sizes: PropTypes.string,
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
	width: PropTypes.number,
}
