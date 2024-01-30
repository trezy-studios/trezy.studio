// Module imports
import { createClient as createContentfulClient } from 'contentful'





// Local imports
import { calculateReadtime } from './calculateReadtime.js'





// Constants
const ITEMS_PER_PAGE = 7





/**
 * Retrieves the Contentful client.
 *
 * @param {boolean} isPreview Whether the client should retrieve preview data.
 * @returns {import('contentful').ContentfulClientApi} The Contentful client.
 */
function getClient(isPreview = false) {
	const clientConfig = {
		accessToken: /** @type {string} **/ (process.env.CONTENTFUL_API_ACCESS_TOKEN),
		space: /** @type {string} **/ (process.env.CONTENTFUL_API_SPACE_ID),
	}

	if (isPreview) {
		clientConfig.accessToken = /** @type {string} **/ (process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN)
		clientConfig.host = 'preview.contentful.com'
	}

	return createContentfulClient(clientConfig)
}

/**
 * Simplifies the structure of an article from Contentful.
 *
 * @param {object} article The original article from Contentful.
 * @returns {object} The simplified article.
 */
function parseArticle(article) {
	return {
		...article.fields,
		id: article.sys.id,
		createdAt: article.fields.publishedDate,
		readtime: calculateReadtime(article.fields.body),
	}
}

/**
 * Retrieves all articles from Contentful.
 *
 * @returns {Promise<object>} A list of all articles.
 */
export async function getAllArticles() {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.getEntries({
			// eslint-disable-next-line camelcase
			content_type: 'pageBlogPost',
			order: ['-fields.publishedDate'],
		})

	return contentfulResponse.items.map(parseArticle)
}

/**
 * Retrieves a single article from Contentful by its slug.
 *
 * @param {string} slug The slug of the article.
 * @param {boolean} isPreview Whether or not to retrieve the latest draft version of the article.
 * @returns {Promise<object>} The retrieved article.
 */
export async function getArticle(slug, isPreview = false) {
	const contentfulClient = getClient(isPreview)
	const contentfulResponse = await contentfulClient
		.getEntries({
			// eslint-disable-next-line camelcase
			content_type: 'pageBlogPost',
			'fields.slug': slug,
			include: 3,
			limit: 1,
		})

	if (contentfulResponse.total === 0) {
		return null
	}

	return parseArticle(contentfulResponse.items[0])
}

/**
 * Retrieves an article from Contentful by its ID.
 *
 * @param {string} id The ID of the article.
 * @param {boolean} isPreview Whether or not to retrieve the latest draft version of the article.
 * @returns {Promise<object>} The retrieved article.
 */
export async function getArticleByID(id, isPreview) {
	const contentfulClient = getClient(isPreview)
	const article = await contentfulClient.getEntry(id)

	if (!article) {
		return null
	}

	return parseArticle(article)
}

/**
 * Retrieves a page of articles from Contentful.
 *
 * @param {number} [pageNumber] The number of the page to be retrieved.
 * @returns {Promise<import('../types/ContentfulGame.js').ContentfulGame[]>} A list of articles in the page.
 */
export async function getGames(pageNumber = 1) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.getEntries({
			// eslint-disable-next-line camelcase
			content_type: 'game',
			include: 10,
			limit: ITEMS_PER_PAGE,
			order: ['-sys.createdAt'],
			skip: (Number(pageNumber) - 1) * ITEMS_PER_PAGE,
		})

	// @ts-expect-error I promise this type is correct. 😅
	return /** @type {import('../types/ContentfulGame.js').ContentfulGame[]} */ (contentfulResponse.items)
}

/**
 * Retrieves a page of articles from Contentful.
 *
 * @param {number} [pageNumber] The number of the page to be retrieved.
 * @returns {Promise<object[]>} A list of articles in the page.
 */
export async function getPage(pageNumber = 1) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.getEntries({
			// eslint-disable-next-line camelcase
			content_type: 'pageBlogPost',
			include: 10,
			limit: ITEMS_PER_PAGE,
			order: ['-fields.publishedDate'],
			skip: (Number(pageNumber) - 1) * ITEMS_PER_PAGE,
		})

	return contentfulResponse.items
}

/**
 * Retrieves a list of articles relevant to a search query.
 *
 * @param {string} query The search query.
 * @returns {Promise<object[]>} A list of articles in the page.
 */
export async function searchArticles(query) {
	const contentfulClient = getClient()
	const contentfulResponse = await contentfulClient
		.getEntries({
			// eslint-disable-next-line camelcase
			content_type: 'pageBlogPost',
			include: 3,
			limit: 5,
			query,
		})

	return contentfulResponse.items
}
