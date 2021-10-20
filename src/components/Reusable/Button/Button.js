import React from 'react';
import { navigate } from 'gatsby';

function Button(props) {
	const { buttonMessage } = props;

	function buttonAction() {
		if (buttonMessage === 'Go Back') {
			return navigate('/dashboard');
		} else if (buttonMessage === 'Update Post') {
			return navigate(props.path + '?update');
		} else if (buttonMessage === 'Submit') {
			return props.handleSubmit();
		} else if (buttonMessage === 'Go Back To Post') {
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
