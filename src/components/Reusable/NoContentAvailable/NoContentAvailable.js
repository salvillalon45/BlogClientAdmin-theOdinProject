import React from 'react';

function NoContentAvailable({ message }) {
	return (
		<div className='text-center'>
			<p className='font-lato'>No {message} available</p>
		</div>
	);
}

export default NoContentAvailable;
