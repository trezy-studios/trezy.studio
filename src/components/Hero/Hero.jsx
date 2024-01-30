// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import styles from './Hero.module.scss'





// Constants
/** @enum {string} */
export const ALIGNMENTS = {
	CENTER: 'center',
	LEFT: 'left',
	RIGHT: 'right',
}
/** @enum {string} */
export const FITS = {
	CONTAIN: 'contain',
	COVER: 'cover',
}
/** @enum {string} */
export const SIZES = {
	FULL: 'full',
	HALF: 'half',
	MOST: 'most',
}





/**
 * Renders a hero container.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} [props.background] The background to be rendered.
 * @param {ALIGNMENTS} [props.backgroundAlignment] How the background should be aligned on the horizontal axis.
 * @param {string} [props.backgroundColor] A fill color to be used behind the background.
 * @param {FITS} [props.backgroundFit] How the background should be sized for the component.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {string} [props.contentClassName] Additional classes to be applied to the component's content element.
 * @param {SIZES} [props.size] What size the hero should be.
 * @param {import('react').CSSProperties} [props.style] Additional styles to be applied to the component.
 */
export function Hero(props) {
	const {
		background = null,
		backgroundAlignment = ALIGNMENTS.CENTER,
		backgroundColor,
		backgroundFit = FITS.COVER,
		children = null,
		className = '',
		contentClassName = '',
		size = SIZES.FULL,
		style,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames({
			[styles['hero']]: true,
			[styles['full-size']]: size === SIZES.FULL,
			[styles['half-size']]: size === SIZES.HALF,
			[styles['most-size']]: size === SIZES.MOST,
			[className]: true,
		})
	}, [
		className,
		size,
	])

	const compiledContentClassName = useMemo(() => {
		return classnames(
			styles['hero-content'],
			contentClassName,
		)
	}, [contentClassName])

	const compiledBackgroundClassName = useMemo(() => {
		return classnames(
			styles['background'],
			styles[String(backgroundAlignment)],
			styles[`background-${backgroundFit}`],
		)
	}, [
		backgroundAlignment,
		backgroundFit,
	])

	const compiledStyles = useMemo(() => {
		const stylesObject = {}

		if (backgroundColor) {
			stylesObject.backgroundColor = backgroundColor
		}

		return stylesObject
	}, [backgroundColor])

	return (
		<div
			className={compiledClassName}
			style={style}>
			<div
				className={compiledBackgroundClassName}
				style={compiledStyles}>
				{background}
			</div>

			<div className={compiledContentClassName}>
				{children}
			</div>
		</div>
	)
}

Hero.propTypes = {
	background: PropTypes.node,
	// eslint-disable-next-line jsdoc/require-jsdoc
	backgroundAlignment: (props, propName, componentName) => {
		const alignmentValues = Object.values(ALIGNMENTS)
		const prop = props[propName]

		if (!prop) {
			return null
		}

		if (Array.isArray(prop)) {
			if (prop.length < 1) {
				throw new Error(`Invalid prop ${propName} supplied to ${componentName}. Array must have at least 1 item.`)
			}

			if (prop.length > 2) {
				throw new Error(`Invalid prop ${propName} supplied to ${componentName}. Array may have no more than 2 items.`)
			}

			if (!prop.every(item => alignmentValues.includes(item))) {
				throw new Error(`Invalid prop ${propName} supplied to ${componentName}. All items must be in this list: ${alignmentValues.join(' ')}.`)
			}
		} else if (!alignmentValues.includes(prop)) {
			throw new Error(`Invalid prop ${propName} supplied to ${componentName}. Value must be in this list: ${alignmentValues.join(' ')}.`)
		}

		return null
  },
	backgroundColor: PropTypes.string,
	backgroundFit: PropTypes.oneOf(Object.values(FITS)),
	children: PropTypes.node,
	className: PropTypes.string,
	contentClassName: PropTypes.string,
	size: PropTypes.oneOf(['full', 'half', 'most']),
	style: PropTypes.object,
}
