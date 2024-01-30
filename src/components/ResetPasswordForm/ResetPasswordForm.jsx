'use client'

// Module imports
import {
	useCallback,
	useState,
} from 'react'





// Local imports
import styles from './ResetPasswordForm.module.scss'

import {
	AUTH_REQUIREMENT,
	useAuthRedirect,
} from '../../hooks/useAuthRedirect.js'
import { Button } from '../Button/Button.jsx'
import { Content } from '../Content/Content.jsx'
import { Form } from '../Form/Form.jsx'
import { Heading } from '../Heading/Heading.jsx'
import { Input } from '../Input/Input.jsx'
import useSupabase from '../../hooks/useSupabase.js'





/**
 * Renders the login page.
 *
 * @component
 */
export function ResetPasswordForm() {
	useAuthRedirect(AUTH_REQUIREMENT.LOGGED_IN, '/dashboard')

	const {
		requestPasswordReset,
	} = useSupabase()

	const [email, setEmail] = useState('')
	const [isRequestingReset, setIsRequestingReset] = useState(false)
	const [isResetSent, setIsResetSent] = useState(false)

	/** @type {[*, Function]} */
	const [authError, setAuthError] = useState(null)

	const handleEmailChange = useCallback(event => {
		setAuthError(null)
		setEmail(event.target.value)
	}, [])

	const handleSubmit = useCallback(event => {
		event.preventDefault()
		setIsRequestingReset(true)
		requestPasswordReset(email)
			.then(() => setIsResetSent(true))
			.catch(error => {
				setAuthError(error)
				setIsRequestingReset(false)
			})
	}, [
		requestPasswordReset,
		email,
	])

	return (
		<div className={styles['login-form-wrapper']}>
			<Form
				className={styles['login-form']}
				onSubmit={handleSubmit}>
				<Heading level={2}>
					{'Reset Password'}
				</Heading>

				{isResetSent && (
					<Content>
						{'Success! Your password reset has been sent. Check your email for further instructions.'}
					</Content>
				)}

				{!isResetSent && (
					<>
						<Input
							onChange={handleEmailChange}
							placeholder={'Email'}
							type={'email'}
							value={email} />

						{(authError instanceof Error) && (
							<div className={styles['error']}>
								{authError.message}
							</div>
						)}

						<div className={styles['form-controls']}>
							<Button
								className={styles['login-button']}
								isLoading={isRequestingReset}
								isPrimary
								isSubmit
								shouldShowLoader>
								{'Request Password Reset'}
							</Button>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}
