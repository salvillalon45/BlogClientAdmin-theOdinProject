import React from 'react';
import { navigate } from 'gatsby-link';
import IntroHeader from './IntroHeader';
import AuthForm from './AuthForm';
import Errors from '../Reusable/Errors';
import {
	executeRESTMethod,
	checkUserLoggedIn,
	checkForErrors
} from '../../lib/utils';

function IndexPageContent() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [errors, setErrors] = React.useState(null);

	React.useEffect(() => {
		if (checkUserLoggedIn()) {
			navigate('/dashboard');
		}
	});

	async function handleSubmit(usernameTest) {
		const authData = { username: usernameTest, password };
		console.log('What is authData');
		console.log({ authData });
		if (
			process.env.GATSBY_USER === usernameTest &&
			process.env.GATSBY_PASSWORD === password
		) {
			const loginData = await executeRESTMethod(
				'post',
				authData,
				'log-in'
			);

			checkForErrors(loginData, setErrors);

			const { user, token } = loginData;
			const { username, _id: user_ref } = user;

			localStorage.setItem(
				'user',
				JSON.stringify({ username, user_ref })
			);
			localStorage.setItem('token', token);

			setUsername('');
			setPassword('');
			navigate('/dashboard');
		} else {
			checkForErrors(
				{ errors: ['Incorrect Username and Password'] },
				setErrors
			);
		}
	}

	function handleChange(event) {
		const { name, value } = event.target;
		console.log({ value });
		if (name === 'username') {
			setUsername(value);
		} else {
			setPassword(value);
		}
	}

	return (
		<div className='indexPageContentContainer'>
			<IntroHeader />

			<AuthForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				username={username}
				password={password}
			/>

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default IndexPageContent;
