// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Local imports
import { JSONLD } from '../JSONLD/JSONLD.jsx'





// Constants
const JSON_LD = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	contactPoint: { email: 'hello@trezy.studio' },
	founders: [
		{ givenName: 'Trezy' },
	],
	foundingDate: '2022-06-16T05:00:00.000Z',
	legalName: 'Trezy Studios, LLC',
	logo: 'https://trezy.studio/logo.light.png',
	name: 'Trezy Studios',
	url: 'https://trezy.studio',
}
const OG_PROPERTIES = {
	locale: 'en_US',
	type: 'website',
	url: 'https://trezy.studio/',
	siteName: 'Trezy Studios | Handcrafted Gaming Experiences',
}
const TWITTER_PROPERTIES = {
	cardType: 'summary_large_image',
	handle: '@TrezyStudios',
	site: '@TrezyStudios',
}





function DefaultSEOWrapper() {
	return (
		<>
			<JSONLD data={JSON_LD} />

			<DefaultSEO
				defaultTitle={'Trezy Studios'}
				openGraph={OG_PROPERTIES}
				themeColor={'#0e92c7'}
				titleTemplate={'%s | Trezy Studios'}
				twitter={TWITTER_PROPERTIES} />
		</>
	)
}

export {
	DefaultSEOWrapper as DefaultSEO,
}
