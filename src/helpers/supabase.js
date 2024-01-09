'use client'

// Module imports
import { createBrowserClient } from '@supabase/ssr'





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
 * Initiates Discord login via Supabase.
 */
export async function signInWithDiscord() {
	const supabase = getSupabaseClient()

	await supabase.auth.signInWithOAuth({ provider: 'discord' })
}

/**
 * Signs the user out.
 */
export async function signOut() {
	const supabase = getSupabaseClient()

	await supabase.auth.signOut()
}
