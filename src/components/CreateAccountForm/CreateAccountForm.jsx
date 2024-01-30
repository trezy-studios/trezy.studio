'use client'

// Module imports
import {
	useCallback,
	useState,
} from 'react'
import { useDebounce } from '@uidotdev/usehooks'





// Local imports
import styles from './CreateAccountForm.module.scss'

import {
	AUTH_REQUIREMENT,
	useAuthRedirect,
} from '../../hooks/useAuthRedirect.js'
import { Button } from '../../components/Button/Button.jsx'
import { Form } from '../Form/Form.jsx'
import { Heading } from '../../components/Heading/Heading.jsx'
import { Input } from '../Input/Input.jsx'
import { Requirement } from './Requirement.jsx'
import useSupabase from '../../hooks/useSupabase.js'





/**
 * Renders the login page.
 *
 * @component
 */
export default function CreateAccountForm() {
	useAuthRedirect(AUTH_REQUIREMENT.LOGGED_IN, '/dashboard')

	const { registerNewAccount } = useSupabase()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [isLoggingIn, setIsLoggingIn] = useState(false)

	/** @type {[*, Function]} */
	const [authError, setAuthError] = useState(null)

	/** @type {[true | false | null, Function]} */
	const [isEmailValid, setIsEmailValid] = useState(null)

	/** @type {[true | false | null, Function]} */
	const [doPasswordsMatch, setDoPasswordsMatch] = useState(null)

	/** @type {[true | false | null, Function]} */
	const [isPasswordLongEnough, setIsPasswordLongEnough] = useState(null)

	const debouncedIsEmailValid = useDebounce(isEmailValid, 300)
	const debouncedIsPasswordLongEnough = useDebounce(isPasswordLongEnough, 300)
	const debouncedDoPasswordsMatch = useDebounce(doPasswordsMatch, 300)

	const handleEmailChange = useCallback(event => {
		const newEmailValue = event.target.value

		setAuthError(null)
		setEmail(newEmailValue)
		setIsEmailValid(newEmailValue ? /^.+@.+$/u.test(newEmailValue) : null)
	}, [])

	const handlePasswordChange = useCallback(event => {
		const newPasswordValue = event.target.value

		setAuthError(null)
		setPassword(newPasswordValue)
		setIsPasswordLongEnough(newPasswordValue ? (newPasswordValue.length >= 6) : null)
	}, [])

	const handleConfirmPasswordChange = useCallback(event => {
		const newConfirmPasswordValue = event.target.value

		setAuthError(null)
		setConfirmPassword(newConfirmPasswordValue)
		setDoPasswordsMatch((password && newConfirmPasswordValue) ? (password === newConfirmPasswordValue) : null)
	}, [password])

	const handleSubmit = useCallback(event => {
		event.preventDefault()
		setIsLoggingIn(true)
		registerNewAccount(email, password)
			.catch(error => {
				setAuthError(error)
				setIsLoggingIn(false)
			})
	}, [
		password,
		registerNewAccount,
		email,
	])

	return (
		<Form
			className={styles['create-account-form']}
			onSubmit={handleSubmit}>
			<Heading level={2}>
				{'Create Account'}
			</Heading>

			<Input
				onChange={handleEmailChange}
				placeholder={'Email'}
				type={'email'}
				value={email} />

			<Input
				onChange={handlePasswordChange}
				placeholder={'Password'}
				type={'password'}
				value={password} />

			<Input
				onChange={handleConfirmPasswordChange}
				placeholder={'Confirm Password'}
				type={'password'}
				value={confirmPassword} />

			<ul className={styles['requirements']}>
				<Requirement isValid={debouncedIsEmailValid}>
					{'Must have a valid email'}
				</Requirement>

				<Requirement isValid={debouncedIsPasswordLongEnough}>
					{'Password must be at least 6 characters'}
				</Requirement>

				<Requirement isValid={debouncedDoPasswordsMatch}>
					{'Passwords must match'}
				</Requirement>
			</ul>

			{(authError instanceof Error) && (
				<div className={styles['error']}>
					{authError.message}
				</div>
			)}

			<div className={styles['form-controls']}>
				<Button
					className={styles['login-button']}
					isDisabled={!debouncedIsEmailValid || !debouncedDoPasswordsMatch || !debouncedIsPasswordLongEnough}
					isLoading={isLoggingIn}
					isPrimary
					isSubmit
					shouldShowLoader>
					{'Sign Up'}
				</Button>
			</div>
		</Form>
	)
}
