import React from 'react';
import Errors from '../Errors';
import Button from '../Button';

function AuthCheck({ errors }) {
	return (
		<div className='authCheckContainer'>
			<Errors errors={errors} />

			<Button buttonMessage={'Log In'} path={'/'} />
		</div>
	);
}

export default AuthCheck;
