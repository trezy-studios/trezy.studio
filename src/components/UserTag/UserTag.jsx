'use client'

// Module imports
import Image from 'next/image.js'
import PropTypes from 'prop-types'





// Local imports
import styles from './UserTag.module.scss'





/**
 * @component
 * @param {object} props All props.
 * @param {string} [props.avatarURL] The URL of the user's avatar.
 * @param {string} props.username The user's display name.
 */
export function UserTag(props) {
	const {
		avatarURL,
		username,
	} = props

	return (
		<div className={styles['user-tag']}>
			{(typeof avatarURL !== 'undefined') && (
				<div className={styles['inline-avatar']}>
					<Image
						alt={`${username}'s avatar`}
						fill
						src={avatarURL} />
				</div>
			)}

			{`${username}`}
		</div>
	)
}

UserTag.propTypes = {
	avatarURL: PropTypes.string,
	username: PropTypes.string.isRequired,
}
