import React from 'react';
import { useLocation } from '@reach/router';

import ActionForm from './ActionForm';
import Errors from '../Reusable/Errors';
import Button from '../Reusable/Button';
import { executeRESTMethod, checkForErrors } from '../../lib/utils';
import IsLoaded from '../Reusable/IsLoaded';

function ActionPostPageContent({ postid, post, actionToTake }) {
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [content, setContent] = React.useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		if (name === 'title') {
			setTitle(value);
		} else {
			setContent(value);
		}
	}

	async function handleSubmit() {
		const { user_ref } = JSON.parse(localStorage.getItem('user')) ?? '';
		if (!user_ref) {
			setErrors([
				'You need to log in to create, update, or delete a post'
			]);
			return;
		}

		const actionFormData = {
			title,
			content,
			author: user_ref
		};

		let method = '';
		let path = '';
		if (actionToTake === 'update') {
			method = 'put';
			path = `posts/${postid}`;
		} else {
			method = 'post';
			path = `posts/`;
		}

		const actionData = await executeRESTMethod(
			method,
			actionFormData,
			path,
			localStorage.getItem('token')
		);

		checkForErrors(actionData, setErrors);

		setErrors(null);
		setIsLoaded(true);
		console.groupEnd();
	}

	return (
		<div className='actionPostPageContentContainer'>
			{actionToTake === 'update' ? (
				<Button
					buttonMessage={'Go Back To Post'}
					path={`/dashboard/blog/${postid}`}
				/>
			) : (
				<Button
					buttonMessage={'Go Back To Dashboard'}
					path={`/dashboard`}
				/>
			)}

			<h2 className='font-lora text-2xl text-center my-6'>
				{actionToTake === 'update'
					? 'Update a Post'
					: 'Create a New Post'}
			</h2>

			<ActionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				actionFormData={{ title, content }}
			/>

			{isLoaded &&
				!errors &&
				(actionToTake === 'update' ? (
					<IsLoaded
						message={'Update Successful'}
						action={'Update a Post'}
					/>
				) : (
					<IsLoaded
						message={'New Post Created Successfully'}
						action={'Create a New Post'}
					/>
				))}

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default ActionPostPageContent;
