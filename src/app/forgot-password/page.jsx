// Local imports
import { Hero } from '../../components/Hero/Hero.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'
import { ResetPasswordForm } from '../../components/ResetPasswordForm/ResetPasswordForm.jsx'





/**
 * Renders the login page.
 *
 * @component
 */
export default function ForgotPassword() {
	return (
		<PageContent>
			<Hero>
				<ResetPasswordForm />
			</Hero>
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'Welcome to Trezy Studios - Where Imagination Meets Play',
	title: 'Forgot Password',
}
