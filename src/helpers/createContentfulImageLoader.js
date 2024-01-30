/**
 * @param {string} src The URL of the image to be loaded.
 * @param {string} fit How the image should be fit within the size.
 * @param {string} focusArea What part of the image should be saved if it has to be cropped.
 * @returns {import('next/image').ImageLoader} A Next.js image loader.
 */
export function createContentfulImageLoader(src, fit, focusArea) {
	/**
	 * @param {import('next/image').ImageLoaderProps} loaderProps All props for the loader.
	 * @returns {string} The constructed image URL.
	 */
	return loaderProps => {
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
	}
}
