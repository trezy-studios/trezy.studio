'use client'

// Module imports
import {
	faApple,
	faDiscord,
	faGoogle,
	// faSteam,
	faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import {
	useCallback,
	useState,
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import styles from './LoginForm.module.scss'

import {
	AUTH_REQUIREMENT,
	useAuthRedirect,
} from '../../hooks/useAuthRedirect.js'
import { Button } from '../../components/Button/Button.jsx'
import { Form } from '../Form/Form.jsx'
import { Heading } from '../../components/Heading/Heading.jsx'
import { Input } from '../Input/Input.jsx'
import { Link } from '../Link/Link.jsx'
import { ScreenReaderText } from '../ScreenReaderText/ScreenReaderText.jsx'
import useSupabase from '../../hooks/useSupabase.js'





/**
 * Renders the login page.
 *
 * @component
 */
export default function LoginForm() {
	useAuthRedirect(AUTH_REQUIREMENT.LOGGED_IN, '/dashboard')

	const {
		signInWithApple,
		signInWithDiscord,
		signInWithEmail,
		signInWithGoogle,
		// signInWithSteam,
		signInWithTwitch,
	} = useSupabase()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isLoggingIn, setIsLoggingIn] = useState(false)

	/** @type {[*, Function]} */
	const [authError, setAuthError] = useState(null)

	const handleUsernameChange = useCallback(event => {
		setAuthError(null)
		setUsername(event.target.value)
	}, [])

	const handlePasswordChange = useCallback(event => {
		setAuthError(null)
		setPassword(event.target.value)
	}, [])

	const handleSubmit = useCallback(event => {
		event.preventDefault()
		setIsLoggingIn(true)
		signInWithEmail(username, password)
			.catch(error => {
				setAuthError(error)
				setIsLoggingIn(false)
			})
	}, [
		password,
		signInWithEmail,
		username,
	])

	return (
		<div className={styles['login-form-wrapper']}>
			<Form
				className={styles['login-form']}
				onSubmit={handleSubmit}>
				<Heading level={2}>
					{'Login'}
				</Heading>

				<Input
					onChange={handleUsernameChange}
					placeholder={'Email'}
					type={'email'}
					value={username} />

				<Input
					onChange={handlePasswordChange}
					placeholder={'Password'}
					type={'password'}
					value={password} />

				{(authError instanceof Error) && (
					<div className={styles['error']}>
						{authError.message}
					</div>
				)}

				<div className={styles['form-links']}>
					<Link href={'/forgot-password'}>
						{'Forgot Password'}
					</Link>

					<span>
						{'Don\'t have an account? '}

						<Link href={'/create-account'}>
							{'Sign up now'}
						</Link>
					</span>
				</div>

				<div className={styles['form-controls']}>
					<Button
						className={styles['login-button']}
						isLoading={isLoggingIn}
						isPrimary
						isSubmit
						shouldShowLoader>
						{'Login'}
					</Button>
				</div>
			</Form>

			<div className={styles['social-logins-wrapper']}>
				<header>{'login via'}</header>

				<div className={styles['social-logins']}>
					<Button
						className={styles['button']}
						isPrimary
						onClick={signInWithDiscord}>
						<FontAwesomeIcon
							fixedWidth
							icon={faDiscord} />
						<ScreenReaderText>
							{'Discord'}
						</ScreenReaderText>
					</Button>

					<Button
						className={styles['button']}
						isPrimary
						onClick={signInWithApple}>
						<FontAwesomeIcon
							fixedWidth
							icon={faApple} />
						<ScreenReaderText>
							{'Apple'}
						</ScreenReaderText>
					</Button>

					<Button
						className={styles['button']}
						isPrimary
						onClick={signInWithGoogle}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGoogle} />
						<ScreenReaderText>
							{'Google'}
						</ScreenReaderText>
					</Button>

					<Button
						className={styles['button']}
						isPrimary
						onClick={signInWithTwitch}>
						<FontAwesomeIcon
							fixedWidth
							icon={faTwitch} />
						<ScreenReaderText>
							{'Twitch'}
						</ScreenReaderText>
					</Button>

					{/* <Button
						className={styles['button']}
						isPrimary
						onClick={signInWithSteam}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSteam} />
						<ScreenReaderText>
							{'Steam'}
						</ScreenReaderText>
					</Button> */}
				</div>
			</div>
		</div>
	)
}
