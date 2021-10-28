import React from 'react';
import Button from '../../Reusable/Button';

function ActionForm(props) {
	const { title, content } = props.actionFormData;
	console.log('What is title and content');
	console.log(title);
	console.log(content);
	return (
		<div className='actionFormWrapperContainer m-auto w-full max-w-xl my-9'>
			<form className='actionFormContainer bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-lora font-bold mb-2'
						htmlFor='title'
					>
						Title of Post
					</label>
					<input
						className='shadow appearance-none border font-lato rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='title'
						name='title'
						type='text'
						placeholder='Title of Post'
						value={title}
						onChange={(event) => props.handleChange(event)}
					/>
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-lora font-bold mb-2'
						htmlFor='content'
					>
						Content of Post
					</label>
					<textarea
						className='shadow appearance-none border font-lato rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='content'
						name='content'
						type='text'
						placeholder='Content of Post'
						value={content}
						onChange={(event) => props.handleChange(event)}
					/>
				</div>

				<Button
					buttonMessage={'Submit'}
					handleSubmit={props.handleSubmit}
				/>
			</form>
		</div>
	);
}

export default ActionForm;
