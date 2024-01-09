// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders a JSON+LD block into the page.
 *
 * @component
 * @param {object} props All props.
 * @param {object} props.data The object to be used for JSON+LD.
 */
export function JSONLD(props) {
	const { data } = props

	const dataString = useMemo(() => {
		return { __html: JSON.stringify(data) }
	}, [data])

	return (
		<script
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={dataString}
			type={'application/ld+json'} />
	)
}

JSONLD.propTypes = {
	data: PropTypes.object.isRequired,
}
