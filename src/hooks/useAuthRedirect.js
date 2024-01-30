'use client'

// Module imports
import { useEffect } from 'react'
import { useRouter } from 'next/navigation.js'





// Local imports
import useSupabase from '../hooks/useSupabase.js'





// Constants
/** @enum {boolean} */
export const AUTH_REQUIREMENT = {
	LOGGED_IN: true,
	LOGGED_OUT: false,
}





/**
 * Redirects the user depending on their auth state.
 *
 * @param {AUTH_REQUIREMENT} authRequirement Redirect if this auth requirement is met.
 * @param {string} redirectTo The URL to send the user to.
 */
export function useAuthRedirect(authRequirement, redirectTo) {
	const router = useRouter()

	const {
		isLoggedIn,
		isSessionLoaded,
	} = useSupabase()

	useEffect(() => {
		if (!isSessionLoaded) {
			return
		}

		if (authRequirement === isLoggedIn) {
			router.replace(redirectTo)
		}
	}, [
		authRequirement,
		isLoggedIn,
		isSessionLoaded,
		redirectTo,
		router,
	])
}
