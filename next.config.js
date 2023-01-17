/* eslint-env node */

/**
 * @typedef RedirectConfig
 * @property {string} source The route to be redirected
 * @property {string} destination The destination to which the request should be redirected
 * @property {boolean} permanent Whether this redirect should be a 307 (temp) or 308 (permanent)
 */

module.exports = {
	/**
	 * @returns {RedirectConfig[]} An array of redirect configs.
	 */
	redirects() {
		return [
			// {
			// 	source: '/kickstarter',
			// 	destination: 'https://kickstarter.com/projects/',
			// 	permanent: false,
			// },
			{
				source: '/discord',
				destination: 'https://discord.gg/QXaS8zk6mH',
				permanent: false,
			},
			// {
			// 	source: '/epic-games',
			// 	destination: 'https://store.epicgames.com/',
			// 	permanent: false,
			// },
			{
				source: '/github',
				destination: 'https://github.com/trezy-studios',
				permanent: false,
			},
			{
				source: '/itch',
				destination: 'https://trezy.itch.io/',
				permanent: false,
			},
			// {
			// 	source: '/steam',
			// 	destination: 'https://steampowered.com/',
			// 	permanent: false,
			// },
			{
				source: '/twitter',
				destination: 'https://twitter.com/TrezyStudios',
				permanent: false,
			},
			{
				source: '/youtube',
				destination: 'https://www.youtube.com/channel/',
				permanent: false,
			},
		]
	},
}
