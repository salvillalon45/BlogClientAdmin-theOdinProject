import React from 'react';
import { getPostId } from '../../../../lib/utils';
import Errors from '../../../Reusable/Errors';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

function CommentForm(props) {
	const [content, setContent] = React.useState('');
	const [errors, setErrors] = React.useState(null);

	function handleChange(event) {
		const { value } = event.target;
		setContent(value);
	}

	async function handleSubmit() {
		try {
			const { user_ref } = JSON.parse(localStorage.getItem('user'));
			const formInput = {
				user_ref: user_ref,
				content,
				timestamp: String(new Date())
			};
			props.handleCommmentsChange(formInput);

			const postid = getPostId();
			const newCommentBody = { content, user_ref };
			const response = await fetch(
				`${process.env.GATSBY_BLOG_API}/posts/${postid}/comments`,
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newCommentBody)
				}
			);

			const commentData = await response.json();
			const errors = commentData.errors ?? '';

			if (errors) {
				setErrors(errors);
				return;
			}

			setContent('');
		} catch (err) {
			setErrors(err);
		}
	}

	return (
		<div className='commentFormWrapperContainer w-full max-w-xs m-auto'>
			<form className='commentFormContainer bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-6'>
					<label
						className='font-lato block text-gray-700 text-sm font-bold mb-2'
						for='comment'
					>
						Your Comment
					</label>
					<textarea
						className='font-lato shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						id='comment'
						name='comment'
						type='text'
						placeholder='Your comment here'
						value={content}
						onChange={(event) => handleChange(event)}
					/>
				</div>
				<div className='flex items-center justify-between'>
					<button
						className='font-lora p-2 rounded-lg	text-white bg-linearBlue text-center mt-2 flex m-auto'
						type='button'
						onClick={() => handleSubmit()}
					>
						Submit
					</button>
				</div>
			</form>

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default CommentForm;
