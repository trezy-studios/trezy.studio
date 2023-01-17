// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'





// Constants
const ogProperties = {
	type: 'website',
	locale: 'en_US',
	url: 'https://trezy.studio/',
	siteName: 'Trezy Studios | Handcrafted Gaming Experiences',
}
const twitterProperties = {
	handle: '@TrezyStudios',
	site: '@TrezyStudios',
	cardType: 'summary_large_image',
}





function DefaultSEOWrapper() {
	return (
		<DefaultSEO
			openGraph={ogProperties}
			twitter={twitterProperties} />
	)
}

export {
	DefaultSEOWrapper as DefaultSEO,
}
