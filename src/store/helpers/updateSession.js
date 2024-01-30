// Local imports
import { store } from '../store.js'





/**
 * Hides the application navigation.
 *
 * @param {null | import('@supabase/supabase-js').AuthSession} sessionData Session data.
 */
export function updateSession(sessionData) {
	store.set(() => ({
		isSessionLoaded: true,
		session: sessionData,
	}))
}
