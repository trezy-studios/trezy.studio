/**
 * Removes query params from a URL string.
 *
 * @param {string | URL} url The URL to be cleaned.
 * @returns {string} The clean URL.
 */
export function getCleanURL(url) {
	const urlWithoutQuery = new URL(url)

	for (const [key] of urlWithoutQuery.searchParams.entries()) {
		urlWithoutQuery.searchParams.delete(key)
	}

	return urlWithoutQuery.toString()
}
