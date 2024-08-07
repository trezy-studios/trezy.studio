// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import '../styles/reset.scss'
import '../styles/lib.scss'
import '../styles/app.scss'

import { ApplicationNav } from '../components/ApplicationNav/ApplicationNav.jsx'
import { ArticulatFont } from '../fonts/ArticulatFont.js'
import { Banner } from '../components/Banner/Banner.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { JSONLD } from '../components/JSONLD/JSONLD.jsx'
import { MotionBackground } from '../components/MotionBackground/MotionBackground.jsx'
import { TREZY_JSONLD } from '../json+ld/Trezy.js'
import { TREZYSTUDIOS_JSONLD } from '../json+ld/TrezyStudios.js'





/**
 * Root layout for the app.
 *
 * @component
 */
export default function RootLayout(props) {
	const {
		children = null,
	} = props

	const compiledClassName = useMemo(() => classnames(ArticulatFont.variable), [])

	return (
		<html
			className={compiledClassName}
			lang={'en'}>
			<body>
				<MotionBackground />
				<ApplicationNav />
				<Banner />

				{children}

				<Footer />

				<JSONLD data={TREZY_JSONLD} />
				<JSONLD data={TREZYSTUDIOS_JSONLD} />
			</body>
		</html>
	)
}

RootLayout.propTypes = {
	children: PropTypes.node,
}

/** @type {import('next').Metadata} */
export const metadata = {
  authors: [
		{
			name: 'Trezy',
			url: 'https://trezy.studio',
		},
	],
  creator: 'Trezy',
	description: 'Generated by create next app',
	keywords: [
		'Debug Game',
		'Games',
		'Game Development',
		'The Inn at Nightfall',
		'Video Games',
	],
	metadataBase: new URL('https://trezy.studio'),
	openGraph: {
			locale: 'en_US',
			type: 'website',
			url: 'https://trezy.studio/',
			siteName: 'Trezy Studios | Handcrafted Gaming Experiences',
	},
  publisher: 'Trezy',
	title: {
		default: 'Trezy Studios',
		template: '%s | Trezy Studios',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@TrezyStudios',
		site: '@TrezyStudios',
	},
}

/** @type {import('next').Viewport} */
export const viewport = {
	themeColor: '#0e92c7',
}
