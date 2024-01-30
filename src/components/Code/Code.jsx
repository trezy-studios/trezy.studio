'use client'

// Module imports
import {
	useEffect,
	useMemo,
} from 'react'
import classnames from 'classnames'
import Prism from 'prismjs'
import PropTypes from 'prop-types'





// Variables
let copyButtonIsRegistered = false





/**
 * Renders a code block.
 *
 * @component
 */
export function Code(props) {
	const {
		className = '',
		children = null,
		language,
	} = props

	const parsedLanguage = language
		.toLowerCase()
		.replace(/\s+/u, ' ')
		.replace(/\s/u, '-')

	const compiledProps = useMemo(() => {
		const result = {
			code: {
				children,
				className: `${className} language-${parsedLanguage}`,
			},
			pre: {
				className: '',
			},
		}

		if (parsedLanguage === 'command-line') {
			result.pre.className = 'command-line'
			result.pre['data-output'] = children
				.split('\n')
				.reduce((accumulator, line, index) => {
					if (!line.startsWith('$')) {
						accumulator.push(index + 1)
					}

					return accumulator
				}, [])
				.join(',')

			result.code.children = children
				.split('\n')
				.map(line => line.replace(/^\$\s+/u, ''))
				.join('\n')
		} else {
			result.pre.className = classnames('line-numbers')
		}

		return result
	}, [
		children,
		className,
		parsedLanguage,
	])

	useEffect(() => {
		if (!copyButtonIsRegistered) {
			Prism.plugins.toolbar.registerButton('copy', () => {
				const button = document.createElement('button')
				button.classList.add('copy-code')
				button.style.cursor = 'pointer'
				button.innerHTML = '<i class="fa-solid fa-clone">Copy</i>'

				button.addEventListener('click', async() => {
					// eslint-disable-next-line jsdoc/require-jsdoc
					const fallbackCopyTextToClipboard = () => {
						const textArea = document.createElement('textarea')
						textArea.value = children

						// Avoid scrolling to bottom
						textArea.style.top = '0'
						textArea.style.left = '0'
						textArea.style.position = 'fixed'

						document.body.appendChild(textArea)
						textArea.focus()
						textArea.select()

						try {
							const isSuccessful = document.execCommand('copy')
							setTimeout(() => {
								if (isSuccessful) {
									onCopySuccess()
								} else {
									onCopyFail()
								}
							}, 1)
						} catch (error) {
							setTimeout(() => {
								onCopyFail(error)
							}, 1)
						}

						document.body.removeChild(textArea)
					}

					if (navigator.clipboard) {
						try {
							await navigator.clipboard.writeText(children)
							onCopySuccess()
						} catch (error) {
							fallbackCopyTextToClipboard()
						}
					} else {
						fallbackCopyTextToClipboard()
					}
				})

				return button
			})

			copyButtonIsRegistered = true
		}

		Prism.highlightAll()
	}, [children])

	return (
		<pre {...compiledProps.pre}>
			<code {...compiledProps.code}>
				{compiledProps.code.children}
			</code>
		</pre>
	)
}

Code.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	language: PropTypes.string.isRequired,
}
