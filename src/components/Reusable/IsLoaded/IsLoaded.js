import React from 'react';

function IsLoaded(props) {
	return (
		<div className='text-center'>
			<h3 className='font-lora font-bold text-2xl underline'>
				{props.action}
			</h3>

			<div className='my-4'>
				<p className='font-lato text-md'>{props.message}</p>
			</div>
		</div>
	);
}

export default IsLoaded;
