// Local imports
import { store } from '../store.js'





/**
 * Toggles the application navigation between visible and hidden.
 */
export function toggleNav() {
	store.set(previousState => ({ isApplicationNavVisible: !previousState.isApplicationNavVisible }))
}
