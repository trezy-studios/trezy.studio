/**
 * Parses a Contentful node fragment and returns it as a string.
 *
 * @param {object} nodeFragment The node fragment to be parsed.
 * @returns {string} The parsed node content as a string.
 */
export function parseContentfulNodeFragmentAsString(nodeFragment) {
	if (nodeFragment.content) {
		return nodeFragment.content.reduce((accumulator, node) => {
			if (node.nodeType === 'embedded-entry-block') {
				// switch(node.data.target.sys.contentType.sys.id) {
				// 	// case 'componentCodeBlock':
				// 	// 	return (
				// 	// 		<Code>{node.value}</Code>
				// 	// 	)

				// 	default:
				// 		console.log(`Unhandled embedded content type: ${node.data.target.sys.contentType.sys.id}`, node)
				// 		return null
				// }
			}

			accumulator += parseContentfulNodeFragmentAsString(node)

			return accumulator
		}, '')
	} else if (nodeFragment.nodeType === 'text') {
		return nodeFragment.value
	}

	console.log('Unrecognised node', nodeFragment)
	return ''
}
