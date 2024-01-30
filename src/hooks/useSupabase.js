'use client'

// Module imports
import {
	useEffect,
	useMemo,
} from 'react'
import { useStore } from 'statery'





// Local imports
import {
	getSupabaseClient,
	registerNewAccount,
	requestPasswordReset,
	signInWithApple,
	signInWithDiscord,
	signInWithEmail,
	signInWithGoogle,
	signInWithSteam,
	signInWithTwitch,
	signOut,
} from '../helpers/supabase.js'
import { store } from '../store/store.js'
import { updateSession } from '../store/helpers/updateSession.js'





// Type definitions
/** @typedef {import('@supabase/supabase-js').AuthSession | null} NullableSession */
/** @typedef {import('react').SetStateAction<NullableSession>} SetSessionAction */
/** @typedef {import('react').Dispatch<SetSessionAction>} SessionDispatch */
/**
 * @typedef {object} SupabaseUtilities
 * @property {import('@supabase/supabase-js').SupabaseClient} client The Supabase client.
 * @property {Function} registerNewAccount Registers a new user.
 * @property {Function} requestPasswordReset Initiates a password reset.
 * @property {Function} signInWithApple Initiates login with Apple via Supabase.
 * @property {Function} signInWithDiscord Initiates login with Discord via Supabase.
 * @property {Function} signInWithEmail Logs the user in to Supabase using their email and password.
 * @property {Function} signInWithGoogle Initiates login with Google via Supabase.
 * @property {Function} signInWithSteam Initiates login with Steam via Supabase.
 * @property {Function} signInWithTwitch Initiates login with Twitch via Supabase.
 * @property {Function} signOut Signs the user out.
 * @property {boolean} isLoggedIn Whether there is a logged in user.
 * @property {boolean} isSessionLoaded Whether the session has been loaded.
 * @property {NullableSession} session The current user session.
 * @property {import('@supabase/supabase-js').AuthUser | undefined} user The current user.
 */





/**
 * @returns {SupabaseUtilities} A collection of Supabase utilities.
 */
export default function useSupabase() {
	const {
		isRetrievingSession,
		isSessionLoaded,
		session,
	} = useStore(store)

	const supabase = getSupabaseClient()

	const utilities = useMemo(() => ({
		client: supabase,
		isLoggedIn: Boolean(session),
		isSessionLoaded,
		registerNewAccount,
		requestPasswordReset,
		session,
		signInWithApple,
		signInWithDiscord,
		signInWithEmail,
		signInWithGoogle,
		signInWithSteam,
		signInWithTwitch,
		signOut,
		user: session?.user,
	}), [
		isSessionLoaded,
		session,
		supabase,
	])

	useEffect(() => {
		if (!isRetrievingSession) {
			// eslint-disable-next-line promise/catch-or-return
			supabase.auth.getSession().then(result => updateSession(result.data.session))
		}

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_, updatedSession) => updateSession(updatedSession))

		return () => subscription.unsubscribe()
	}, [
		isRetrievingSession,
		supabase,
	])

	return utilities
}
