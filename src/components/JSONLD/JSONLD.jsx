// Module imports
import NextHead from 'next/head.js'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders a JSON+LD block into the page.
 *
 * @component
 */
export function JSONLD(props) {
	const { data } = props

	const dataString = useMemo(() => {
		return { __html: JSON.stringify(data) }
	}, [data])

	return (
		<NextHead>
			<script
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={dataString}
				type={'application/ld+json'} />
		</NextHead>
	)
}

JSONLD.propTypes = {
	data: PropTypes.object.isRequired,
}
