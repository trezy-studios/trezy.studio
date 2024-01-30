'use client'

// Module imports
import {
	faGauge,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './AuthMenu.module.scss'

import { Button } from '../Button/Button.jsx'
import { Link } from '../Link/Link.jsx'
import { NavItem } from './NavItem.jsx'
import { UserTag } from '../UserTag/UserTag.jsx'
import useSupabase from '../../hooks/useSupabase.js'





/** @component */
export function AuthMenu() {
	const {
		signOut,
		user,
	} = useSupabase()

	if (user) {
		const userAvatarURL = user.user_metadata.picture
		const username = user.user_metadata.custom_claims?.global_name ?? 'Username'

		return (
			<div className={styles['user-container']}>
				{Boolean(username) && (
					<header>
						{'Welcome, '}
						<UserTag
							avatarURL={userAvatarURL}
							username={username} />
						{'!'}
					</header>
				)}

				{!username && (
					<header>
						{'Welcome!'}
					</header>
				)}

				<ul>
					<li>
						<Link
							className={styles['link']}
							href={'/dashboard'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faGauge}
								size={'xs'} />

							{'Dashboard'}
						</Link>
					</li>

					<li>
						<Button
							className={styles['link']}
							isLink
							onClick={signOut}>
							<FontAwesomeIcon
								fixedWidth
								icon={faRightFromBracket}
								size={'xs'} />

							{'Logout'}
						</Button>
					</li>
				</ul>
			</div>
		)
	}

	return (
		<NavItem
			href={'/login'}
			label={'Login'} />
	)
}
