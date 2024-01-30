// Local imports
import { parseContentfulNodeFragmentAsString } from './parseContentfulNodeFragmentAsString.js'





/**
 * Estimates the read time of a string.
 *
 * @param {string} input The string to calculate read time for.
 * @returns {number} The estmated reading time of the string in milliseconds.
 */
export function calculateReadtime(input) {
	const wordCount = parseContentfulNodeFragmentAsString(input)
		.replace(/\s+/gu, ' ')
		.split(' ')
		.length
	return (wordCount / 200) * 60 * 1000
}
