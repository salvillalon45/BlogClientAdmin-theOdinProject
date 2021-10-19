import React from 'react';

function IsLoaded({ message }) {
	return (
		<div className='text-center'>
			<p className='font-lato'>Loading {message}...</p>
		</div>
	);
}

export default IsLoaded;
