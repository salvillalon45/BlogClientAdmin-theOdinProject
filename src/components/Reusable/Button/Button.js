import React from 'react';
import { navigate } from 'gatsby';

function Button(props) {
	const { buttonMessage } = props;

	function buttonAction() {
		if (
			buttonMessage === 'Go Back' ||
			buttonMessage === 'Go Back To Dashboard'
		) {
			return navigate('/dashboard');
		} else if (buttonMessage === 'Update a Post') {
			return navigate(props.path + '?update');
		} else if (buttonMessage === 'Create a New Post') {
			return navigate(props.path + '?create');
		} else if (buttonMessage === 'Submit') {
			return props.handleSubmit();
		} else if (buttonMessage === 'Go Back To Post') {
			return navigate(props.path);
		} else if (buttonMessage === 'Log In') {
			return navigate(props.path);
		}
	}

	return (
		<button
			type='button'
			className='font-lora p-2 rounded-lg	text-white bg-linearBlue text-center mt-6 flex m-auto'
			onClick={() => buttonAction()}
		>
			{buttonMessage}
		</button>
	);
}

export default Button;
