// Module imports
import SteamAuthClient from 'steam-signin'





// Local imports
import { getCleanURL } from './getCleanURL.js'





// Variables
let steamAuthClient





/**
 * @typedef {object} RequestOptions
 * @property {boolean} [abortPreviousRequests] Whether to abort previous requests against this URL.
 * @property {object} [headers] Headers to be sent with the request.
 * @property {object} [queryParams] Query parameters to append to the request URL.
 */

/******************************************************************************\
 * Local state cache
\******************************************************************************/

const state = {
	activeRequests: new Map,
	controllers: new Map,
}

/**
 * Adds a request to the state.
 *
 * @param {string | URL} url The URL for the request.
 * @param {Promise<Response>} request The fetch request.
 * @param {AbortController} controller The abort controller for the fetch request.
 */
function addActiveRequestToState(url, request, controller) {
	const cleanURL = getCleanURL(url)

	const requestCache = state.activeRequests.get(cleanURL)

	if (requestCache) {
		requestCache.push(request)
	} else {
		state.activeRequests.set(cleanURL, [request])
	}

	state.controllers.set(request, controller)
}

/**
 * Deletes a request from the state.
 *
 * @param {string | URL} url The URL of the request to be deleted from the state.
 */
function deleteActiveRequestsFromState(url) {
	const cleanURL = getCleanURL(url)

	state.activeRequests.delete(cleanURL)
}

/**
 * Aborts any active requests for a URL.
 *
 * @param {string | URL} url The URL for the requests to be aborted.
 */
function abortActiveRequests(url) {
	const cleanURL = getCleanURL(url)

	const requestCache = state.activeRequests.get(cleanURL)

	if (requestCache) {
		requestCache.forEach(cachedRequest => {
			const signal = state.controllers.get(cachedRequest)
			signal.abort()
		})

		deleteActiveRequestsFromState(url)
	}
}

// /**
//  * Retrieves all active requests for a URL.
//  *
//  * @param {string | URL} url The URL for which requests will be retrieved.
//  * @returns {null | Promise<Response>[]}
//  */
// function getActiveRequestsFromState(url) {
// 	const cleanURL = getCleanURL(url)

// 	return state.activeRequests.get(cleanURL.toString())
// }





/******************************************************************************\
 * Core functions
\******************************************************************************/

/**
 * Retrieves the Steam client.
 *
 * @returns {SteamAuthClient} The instantiated Steam client.
 */
export function getSteamAuthClient() {
	if (!steamAuthClient) {
		steamAuthClient = new SteamAuthClient(/** @type {string} */ (process.env.NEXT_PUBLIC_SITE_URL))
	}

	return steamAuthClient
}

/**
 * Initiates a fetch request against the API. Also handles caching of API requests.
 *
 * @param {string | URL} url The URL to make the request against.
 * @param {RequestOptions} [options] All options.
 * @returns {Promise<Response>} The active request.
 */
function apiFetch(url, options = {}) {
	const {
		abortPreviousRequests = true,
	} = options

	const controller = new AbortController

	const urlObject = new URL(url, 'http://api.steampowered.com/')

	urlObject.searchParams.append('key', /** @type {string} */ (process.env.STEAM_API_KEY))

	if (options.queryParams) {
		Object
			.entries(options.queryParams)
			.forEach(entry => {
				urlObject.searchParams.append(...entry)
			})

		delete options.queryParams
	}

	const request = fetch(url, {
		...options,
		signal: controller.signal,
	})

	if (abortPreviousRequests) {
		abortActiveRequests(url)
	}

	addActiveRequestToState(url, request, controller)

	return request
}

/**
 * Initiates a fetch request against the API. The response body will be parsed as JSON and returned as an object.
 *
 * @param {string | URL} url The URL to make the request against.
 * @param {RequestOptions} [options] All options.
 * @returns {Promise<object>} The parsed JSON body of the response.
 */
function apiFetchJSON(url, options) {
	return apiFetch(url, options)
		.then(response => response.json())
}





/******************************************************************************\
 * Helpers
\******************************************************************************/

/**
 * Requests a list of relevant articles from the API based on the query.
 *
 * @param {string} steamUserID The ID of the user for which data will be retrieved.
 * @returns {Promise<object>} A list of relevant articles.
 */
export function getUserData(steamUserID) {
	const url = new URL(`/ISteamUser/GetPlayerSummaries/v0002/?steamids=${steamUserID}`)

	url.searchParams.append('steamids', steamUserID)

	return apiFetchJSON(url)
}
