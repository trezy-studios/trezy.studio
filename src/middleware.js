import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

/**
 * Intercepts and modifies requests before they're handled by other routes.
 *
 * @param {import('next/server').NextRequest} request The request to be modified.
 * @returns {Promise<import('next/server').NextResponse>} The modified response.
 */
export async function middleware(request) {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	})

	const supabase = createServerClient(
		/** @type {string} **/ (process.env.NEXT_PUBLIC_SUPABASE_URL),
		/** @type {string} **/ (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
		{
			cookies: {
				/**
				 * Gets a cookie from the jar.
				 *
				 * @param {string} name The name of the cookie to be retrieved.
				 * @returns {*} The cookie's value
				 */
				get(name) {
					return request.cookies.get(name)?.value
				},

				/**
				 * Adds a cookie to the jar.
				 *
				 * @param {string} name The cookie's name.
				 * @param {string} value The cookie's value.
				 * @param {import('@supabase/ssr').CookieOptions} options Options to be set for the cookie.
				 */
				set(name, value, options) {
					request.cookies.set({
						name,
						value,
						...options,
					})
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					})
					response.cookies.set({
						name,
						value,
						...options,
					})
				},

				/**
				 * Deletes a cookie from the jar.
				 *
				 * @param {string} name The cookie's name.
				 * @param {import('@supabase/ssr').CookieOptions} options Options for the cookie.
				 */
				remove(name, options) {
					request.cookies.set({
						name,
						value: '',
						...options,
					})
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					})
					response.cookies.set({
						name,
						value: '',
						...options,
					})
				},
			},
		},
	)

	await supabase.auth.getSession()

	return response
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
}
