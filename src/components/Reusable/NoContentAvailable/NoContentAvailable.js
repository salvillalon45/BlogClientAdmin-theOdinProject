import React from 'react';

function NoContentAvailable({ message }) {
	return (
		<div className='text-center'>
			<h3 className='font-lora font-bold text-2xl underline'>Missing</h3>
			<p className='font-lato'>No {message} available</p>
		</div>
	);
}

export default NoContentAvailable;
