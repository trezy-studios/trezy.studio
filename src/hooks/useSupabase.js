'use client'

// Module imports
import {
	useEffect,
	useMemo,
	useState,
} from 'react'





// Local imports
import {
	getSupabaseClient,
	signInWithDiscord,
	signOut,
} from '../helpers/supabase.js'





// Type definitions
/** @typedef {import('@supabase/supabase-js').AuthSession | null} NullableSession */
/** @typedef {import('react').SetStateAction<NullableSession>} SetSessionAction */
/** @typedef {import('react').Dispatch<SetSessionAction>} SessionDispatch */





/**
 * @typedef {object} SupabaseUtilities
 * @property {import('@supabase/supabase-js').SupabaseClient} client The Supabase client.
 * @property {Function} signInWithDiscord Initiates login with Discord via Supabase.
 * @property {Function} signOut Signs the user out.
 * @property {boolean} isLoggedIn Whether there is a logged in user.
 * @property {NullableSession} session The current user session.
 * @property {import('@supabase/supabase-js').AuthUser | undefined} user The current user.
 */

/**
 * @returns {SupabaseUtilities} A collection of Supabase utilities.
 */
export default function useSupabase() {
	const supabase = getSupabaseClient()

	const [
		session,
		setSession,
	] = /** @type {[NullableSession, SessionDispatch]} */ (useState(null))

	const utilities = useMemo(() => ({
		client: supabase,
		isLoggedIn: Boolean(session),
		session,
		signInWithDiscord,
		signOut,
		user: session?.user,
	}), [
		session,
		supabase,
	])

	useEffect(() => {
		// eslint-disable-next-line promise/catch-or-return
		supabase.auth.getSession()
			.then(result => setSession(result.data.session))

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_, updatedSession) => {
			setSession(updatedSession)
		})

		return () => subscription.unsubscribe()
	}, [supabase])

	return utilities
}
