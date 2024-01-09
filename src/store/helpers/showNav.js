// Local imports
import { store } from '../store.js'





/**
 * Shows the application navigation.
 */
export function showNav() {
	store.set(() => ({ isApplicationNavVisible: true }))
}
