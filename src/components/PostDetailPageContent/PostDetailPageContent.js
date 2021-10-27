import React from 'react';
import Comments from './Comments';
import PostDetail from './PostDetail';
import Button from '../Reusable/Button';
import Errors from '../Reusable/Errors';
import {
	executeRESTMethod,
	showContent,
	checkForErrors
} from '../../lib/utils';

function PostDetailPageContent({ postid }) {
	const [post, setPost] = React.useState(null);
	const [comments, setComments] = React.useState(null);
	const [errors, setErrors] = React.useState(null);
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);
	const [isCommentLoaded, setIsCommentLoaded] = React.useState(false);
	const [isPostDeleted, setIsPostDeleted] = React.useState(false);

	React.useEffect(async () => {
		const postData = await executeRESTMethod(
			'get',
			null,
			`posts/${postid}`
		);

		checkForErrors(postData, setErrors);

		setPost(postData.post);
		setIsPostLoaded(true);
	}, []);

	React.useEffect(async () => {
		const commentsData = await executeRESTMethod(
			'get',
			null,
			`posts/${postid}/comments`,
			localStorage.getItem('token'),
			'Log in to view comments and create comments!'
		);

		checkForErrors(commentsData, setErrors);

		const { comments } = commentsData;
		setComments(comments);
		setIsCommentLoaded(true);
	}, []);

	async function handlePostDelete() {
		const postDeleteData = await executeRESTMethod(
			'delete',
			null,
			`posts/${postid}`,
			localStorage.getItem('token'),
			'Log in to your account to delete your posts!'
		);

		checkForErrors(postDeleteData, setErrors);

		setIsPostDeleted(true);
	}

	function showPost() {
		const result = showContent(errors, isPostLoaded, 'post', post);

		if (result) {
			return result;
		}

		return <PostDetail post={post} />;
	}

	function showComments() {
		const result = showContent(
			errors,
			isCommentLoaded,
			'comments',
			comments
		);

		if (result) {
			return result;
		}

		return <Comments comments={comments} postid={postid} />;
	}

	function showPostDetailPageContent() {
		if (errors) {
			return <Errors errors={errors} />;
		} else if (isPostDeleted) {
			return (
				<div className='text-center my-9'>
					<h3 className='font-lora font-bold text-2xl underline'>
						Post Deleted Successfully
					</h3>
				</div>
			);
		} else {
			return (
				<>
					<div className='flex'>
						<Button
							buttonMessage={'Update Post'}
							path={`action`}
							color='bg-linearGreen'
						/>
						<Button
							buttonMessage={'Delete Post'}
							color='bg-linearRed'
							handlePostDelete={handlePostDelete}
						/>
					</div>

					{showPost()}

					<hr className='my-9' />

					{showComments()}
				</>
			);
		}
	}

	return (
		<div className='postDetailPageContentContainer'>
			<Button buttonMessage={'Go Back'} />

			{showPostDetailPageContent()}
		</div>
	);
}

export default PostDetailPageContent;
