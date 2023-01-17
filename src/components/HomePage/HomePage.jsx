// Module imports
import Image from 'next/image.js'





// Local imports
import styles from './HomePage.module.scss'

import { Heading } from '../Heading/Heading.jsx'
import LogoImage from '../../../public/logo.dark.png'
import { PageContent } from '../PageContent/PageContent.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





export function HomePage() {
	return (
		<PageContent>
			<PageSection>
				<Heading>
					<Image
						alt={'debug'}
						src={LogoImage}
						width={500} />
				</Heading>

				<div className={styles['description']}>
					<p>{'We specialize in creating handcrafted gaming experiences which are both unique and immersive. From the characters to the worlds they inhabit, everything is designed and built with the utmost care and attention to detail. Our goal is to transport players into new and exciting world where they can lose themselves in the experience and become part of the story. If you\'re looking for truly one-of-a-kind gaming experiences... we\'ve got you covered.'}</p>
				</div>
			</PageSection>
		</PageContent>
	)
}
