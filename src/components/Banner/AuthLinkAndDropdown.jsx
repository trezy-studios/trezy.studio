'use client'

// Module imports
import {
	faGauge,
	faRightFromBracket,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import styles from './Banner.module.scss'

import { Button } from '../Button/Button.jsx'
import { Link } from '../Link/Link.jsx'
import useSupabase from '../../hooks/useSupabase.js'





/** @component */
export function AuthLinkAndDropdown() {
	const {
		signInWithDiscord,
		signOut,
		user,
	} = useSupabase()

	if (user) {
		const userAvatarURL = user.user_metadata.picture
		const username = user.user_metadata.custom_claims.global_name

		return (
			<div className={styles['dropdown']}>
				<Link href={'/dashboard'}>
					<div className={classnames(styles['icon'], styles['avatar'])}>
						<Image
							alt={`${username}'s avatar`}
							fill
							src={userAvatarURL} />
					</div>

					<div className={styles['label']}>
						{username}
					</div>
				</Link>

				<div className={styles['dropdown-contents']}>
					<Link href={'/dashboard'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGauge}
							size={'xs'} />

						{'Dashboard'}
					</Link>

					<Button onClick={signOut}>
						<FontAwesomeIcon
							fixedWidth
							icon={faRightFromBracket}
							size={'xs'} />

						{'Logout'}
					</Button>
				</div>
			</div>
		)
	}

	return (
		<Button onClick={signInWithDiscord}>
			<div className={styles['icon']}>
				<FontAwesomeIcon
					fixedWidth
					icon={faUser}
					size={'xs'} />
			</div>

			<div className={styles['label']}>
				{'Login'}
			</div>
		</Button>
	)
}
