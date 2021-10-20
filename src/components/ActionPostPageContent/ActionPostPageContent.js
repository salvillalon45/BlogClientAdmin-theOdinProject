import React from 'react';
import ActionForm from './ActionForm';
import Errors from '../Reusable/Errors';
import Button from '../Reusable/Button';
import { executeRESTMethod } from '../../lib/utils';

function ActionPostPageContent({ postid, post, actionToTake }) {
	// console.group('Inside ActionPostPageContent');
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [actionFormData, setActionFormData] = React.useState({
		title: '',
		content: '',
		author: ''
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setActionFormData({
			...actionFormData,
			[name]: value
		});
	}

	async function handleSubmit() {
		console.log(actionFormData);
		const { user_ref } = JSON.parse(localStorage.getItem('user'));
		setActionFormData({
			...actionFormData,
			author: user_ref
		});
		const postUpdateData = await executeRESTMethod(
			'put',
			actionFormData,
			`posts/${postid}`,
			localStorage.getItem('token')
		);
		console.log('What is postUpdateData');
		console.log(postUpdateData);
		const errors = postUpdateData.errors ?? '';

		if (errors) {
			setErrors(errors);
			return;
		}

		// postUpdateData
		setIsLoaded(true);
	}

	return (
		<div className='actionPostPageContentContainer'>
			<Button
				buttonMessage={'Go Back To Post'}
				path={`/dashboard/blog/${postid}`}
			/>

			<h2 className='font-lora text-2xl text-center my-6'>
				{actionToTake === 'update'
					? 'Update a Post'
					: 'Create a New Post'}
			</h2>

			<ActionForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				actionFormData={actionFormData}
			/>

			{isLoaded && !errors && <p>Update Successful</p>}

			{errors && <Errors errors={errors} />}
		</div>
	);
}

export default ActionPostPageContent;
