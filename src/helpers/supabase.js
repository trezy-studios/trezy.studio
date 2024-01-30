'use client'

// Module imports
import { createBrowserClient } from '@supabase/ssr'
import SteamSignIn from 'steam-signin'





// Constants
const defaultOAuthOptions = {
	redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
}





// Variables
let supabaseClient





/**
 * Creates or retrieves the Supabase client.
 *
 * @returns {import('@supabase/supabase-js').SupabaseClient} The supabase client.
 */
export function getSupabaseClient() {
	if (!supabaseClient) {
		supabaseClient = createBrowserClient(
			/** @type {string} */ (process.env.NEXT_PUBLIC_SUPABASE_URL),
			/** @type {string} */ (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
		)
	}

	return supabaseClient
}

/**
 * Retrieves game keys for the currently user.
 *
 * @param {string[]} [applicationIDs] An array of application IDs to filter on.
 * @returns {Promise<null | import('../types/Application.js').Application[]>} The results of the query.
 */
export async function getApplications(applicationIDs) {
	const supabase = getSupabaseClient()

	let query = supabase
		.from('applications')
		.select()

	if (applicationIDs) {
		query = query.in('id', applicationIDs)
	}

	const { data } = await query

	return data
}

/**
 * Retrieves game keys for the currently user.
 *
 * @returns {Promise<null | import('../types/GameKey.js').GameKey[]>} The results of the query.
 */
export async function getGameKeys() {
	const supabase = getSupabaseClient()

	const { data } = await supabase
		.from('keys')
		.select()

	return data
}

/**
 * Registers a new user.
 *
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 */
export async function registerNewAccount(email, password) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.signUp({
		email,
		password,
	})

	if (error) {
		throw error
	}
}

/**
 * Requests a password reset.
 *
 * @param {string} email The user's email.
 */
export async function requestPasswordReset(email) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.resetPasswordForEmail(email)

	if (error) {
		throw error
	}
}

/**
 * Initiates Apple login via Supabase.
 *
 * @param {import('@supabase/supabase-js').Provider} provider The ID of the provider to be used.
 */
export async function signInWithOAuth(provider) {
	const supabase = getSupabaseClient()

	await supabase.auth.signInWithOAuth({
		provider,
		options: defaultOAuthOptions,
	})
}

/**
 * Initiates Apple login via Supabase.
 */
export async function signInWithApple() {
	await signInWithOAuth('apple')
}

/**
 * Initiates Discord login via Supabase.
 */
export async function signInWithDiscord() {
	await signInWithOAuth('discord')
}

/**
 * Initiates Google login via Supabase.
 */
export async function signInWithGoogle() {
	await signInWithOAuth('google')
}

/**
 * Initiates Steam login.
 */
export function signInWithSteam() {
	const steamManager = new SteamSignIn(/** @type {string} */ (process.env.NEXT_PUBLIC_SITE_URL))
	const returnURL = `${process.env.NEXT_PUBLIC_SITE_URL}/oauth/steam`

	// @ts-expect-error `URL` is totally valid here, so fuck off Typescript, you're drunk.
	window.location = steamManager.getUrl(returnURL)
}

/**
 * Initiates Twitch login via Supabase.
 */
export async function signInWithTwitch() {
	await signInWithOAuth('twitch')
}

/**
 * Logs the user in to Supabase using their email and password.
 *
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 */
export async function signInWithEmail(email, password) {
	const supabase = getSupabaseClient()

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	if (error) {
		throw error
	}
}

/**
 * Signs the user out.
 */
export async function signOut() {
	const supabase = getSupabaseClient()

	await supabase.auth.signOut()
}
