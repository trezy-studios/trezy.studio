// Module imports
import { makeStore } from 'statery'





/** @typedef {string} ApplicationID */
/** @typedef {{ [key: ApplicationID]: import('../types/Application.js').Application }} ApplicationDictionary */

export const store = makeStore({
	/** @type {null | ApplicationDictionary} */
	applications: null,

	/** @type {null | import('../types/GameKey.js').GameKey[]} */
	gameKeys: null,

	isApplicationNavVisible: false,
})

if (typeof window !== 'undefined') {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window.store = store
}
