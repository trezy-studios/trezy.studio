// Local imports
import { store } from '../store.js'





/**
 * Hides the application navigation.
 */
export function hideNav() {
	store.set(() => ({ isApplicationNavVisible: false }))
}
