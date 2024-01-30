// Module imports
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'





// Local imports
import { CallToAction } from '../CallToAction/CallToAction.jsx'





/**
 * Renders a <CallToAction> that points towards the Discord server.
 *
 * @component
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 */
export function DiscordCallToAction(props) {
	const { children } = props

	return (
		<CallToAction
			color={'#5865F2'}
			href={'/discord'}
			icon={faDiscord}
			message={'Check it out!'}>
			{children}
		</CallToAction>
	)
}

DiscordCallToAction.propTypes = {
	children: PropTypes.node.isRequired,
}
