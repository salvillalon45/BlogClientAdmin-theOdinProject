import React from 'react';

function Errors({ errors }) {
	return (
		<div className='errorContainer text-center my-9'>
			<h3 className='font-lora font-bold text-2xl underline'>Oops</h3>

			<div className='my-4'>
				{errors.map((error) => {
					return <p className='font-lato text-md'>{error}</p>;
				})}
			</div>
		</div>
	);
}

export default Errors;
