// Local imports
import { store } from '../store.js'
import * as supabase from '../../helpers/supabase.js'





/**
 * Retrieves game keys for the currently user.
 */
export async function getGameKeys() {
	const gameKeys = await supabase.getGameKeys()

	const patch = {
		gameKeys: gameKeys ?? [],
	}

	if (gameKeys?.length) {
		const { state } = store

		let applicationIDsToLoad = gameKeys.map(gameKey => gameKey.appID)

		if (state.applications) {
			applicationIDsToLoad = applicationIDsToLoad.filter(applicationID => {
				return !state.applications?.[applicationID]
			})
		}

		const applications = await supabase.getApplications(applicationIDsToLoad)

		if (applications) {
			patch.applications = applications.reduce((accumulator, application) => {
				accumulator[application.id] = application
				return accumulator
			}, { ...state.applications })
		}
	}

	store.set(() => patch)
}
