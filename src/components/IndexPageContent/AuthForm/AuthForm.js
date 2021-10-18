import React from 'react';
import { Link } from 'gatsby';

function AuthForm(props) {
	const { username, password } = props;

	return (
		<div className='authFormWrapperContainer m-auto w-full max-w-xs my-9'>
			<form className='authFormContainer bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-lato font-bold mb-2'
						htmlFor='username'
					>
						Username
					</label>
					<input
						className='shadow appearance-none border font-lato rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='username'
						name='username'
						type='text'
						placeholder='Username'
						value={username}
						onChange={(event) => props.handleChange(event)}
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 font-lato text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border font-lato rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='password'
						name='password'
						type='password'
						placeholder='******************'
						// value={password}
						onChange={(event) => props.handleChange(event)}
					/>
				</div>

				<div className='flex items-center justify-between'>
					<button
						type='button'
						className='font-lora p-2 rounded-lg	text-white bg-linearBlue text-center mt-6 flex m-auto'
						onClick={() => props.handleSubmit(username)}
					>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
}

export default AuthForm;
