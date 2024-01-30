// Local imports
import { Hero } from '../../components/Hero/Hero.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'
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
				<LoginForm />
			</Hero>
		</PageContent>
	)
}

/** @type {import('next').Metadata} */
export const metadata = {
	description: 'Welcome to Trezy Studios - Where Imagination Meets Play',
	title: 'Login',
}
