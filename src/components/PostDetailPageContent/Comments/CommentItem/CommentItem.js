import React from 'react';
import Errors from '../../../Reusable/Errors';
import Button from '../../../Reusable/Button';
import {
	formatDate,
	executeRESTMethod,
	checkForErrors
} from '../../../../lib/utils';

function CommentItem(props) {
	const { content, timestamp, username, commentid, postid } =
		props.commentData;
	const [errors, setErrors] = React.useState(false);
	const [isCommentDeleted, setIsCommentDeleted] = React.useState(false);

	async function handleCommentDelete() {
		const commentDeleteData = await executeRESTMethod(
			'delete',
			null,
			`posts/${postid}/comments/${commentid}`,
			localStorage.getItem('token'),
			'Log in to your account to delete comments in posts!'
		);

		checkForErrors(commentDeleteData, setErrors);

		setIsCommentDeleted(true);
	}

	function showCommentItemContent() {
		if (errors) {
			return <Errors errors={errors} />;
		} else if (isCommentDeleted) {
			return (
				<div className='text-center my-9'>
					<h3 className='font-lora font-bold text-2xl underline'>
						Comment Deleted Successfully
					</h3>
				</div>
			);
		} else {
			return (
				<>
					<p className='font-lato whitespace-pre-line text-xl'>
						{content}
					</p>

					<hr className='my-7' />

					<div className='flex justify-between items-end'>
						<div>
							<p className='font-lato text-md font-medium'>
								By {username}
							</p>
							<p className='font-lato text-md'>
								{formatDate(new Date(timestamp))}
							</p>
						</div>

						<div>
							<Button
								buttonMessage={'Delete Comment'}
								color='bg-linearRed'
								handleCommentDelete={handleCommentDelete}
							/>
						</div>
					</div>
				</>
			);
		}
	}

	return (
		<div className='commentItemContainer p-12 overflow-hidden rounded-lg shadow-xl my-9 w-35'>
			{showCommentItemContent()}
		</div>
	);
}

export default CommentItem;
