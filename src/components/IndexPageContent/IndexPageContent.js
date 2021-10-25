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
		const loginData = await executeRESTMethod('post', authData, 'log-in');

		checkForErrors(loginData, setErrors);

		const { user, token } = loginData;
		const { username, _id: user_ref } = user;

		localStorage.setItem('user', JSON.stringify({ username, user_ref }));
		localStorage.setItem('token', token);

		setUsername('');
		setPassword('');
		navigate('/dashboard');
	}

	function handleChange(event) {
		const { name, value } = event.target;

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
