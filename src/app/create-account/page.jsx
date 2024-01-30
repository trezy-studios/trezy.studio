// Local imports
import CreateAccountForm from '../../components/CreateAccountForm/CreateAccountForm.jsx'
import { Hero } from '../../components/Hero/Hero.jsx'
import { PageContent } from '../../components/PageContent/PageContent.jsx'





/**
 * Renders the login page.
 *
 * @component
 */
export default function Login() {
	return (
		<PageContent>
			<Hero>
				<CreateAccountForm />
			</Hero>
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'Welcome to Trezy Studios - Where Imagination Meets Play',
	title: 'Create an Account',
}
