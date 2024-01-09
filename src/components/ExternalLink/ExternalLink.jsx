// Module imports
import PropTypes from 'prop-types'





/**
 * Renders a link to another domain.
 *
 * @component
 */
export function ExternalLink(props) {
	const {
		children,
		className = '',
		href,
		rel,
	} = props

	return (
		// eslint-disable-next-line react/forbid-elements
		<a
			className={className}
			href={href}
			rel={`noopener noreferrer ${rel}`}
			target={'_blank'}>
			{children}
		</a>
	)
}

ExternalLink.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	rel: PropTypes.string,
}
