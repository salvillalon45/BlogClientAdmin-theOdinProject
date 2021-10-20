import React from 'react';
import Comments from './Comments';
import PostDetail from './PostDetail';
import Button from '../Reusable/Button';
import { executeRESTMethod, showContent } from '../../lib/utils';

function PostDetailPageContent({ postid }) {
	const [post, setPost] = React.useState(null);
	const [comments, setComments] = React.useState(null);
	const [errors, setErrors] = React.useState(null);
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);
	const [isCommentLoaded, setIsCommentLoaded] = React.useState(false);
	const [updateModal, setUpdateModal] = React.useState(false);

	// Client-side Runtime Data Fetching
	React.useEffect(async () => {
		const postData = await executeRESTMethod(
			'get',
			null,
			`posts/${postid}`
		);
		const errors = postData.errors ?? '';

		if (errors) {
			setErrors(errors);
			return;
		}

		setPost(postData.post);
		setIsPostLoaded(true);
	}, []);

	React.useEffect(async () => {
		const commentsData = await executeRESTMethod(
			'get',
			null,
			`posts/${postid}/comments`,
			localStorage.getItem('token'),
			'Create an account or log in to your current account to view comments and create comments!'
		);

		const errors = commentsData.errors ?? '';

		if (errors) {
			setErrors(errors);
			return;
		}

		const { comments } = commentsData;

		setComments(comments);
		setIsCommentLoaded(true);
	}, []);

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

		return <Comments comments={comments} />;
	}

	function handleUpdateModal() {
		setUpdateModal(!updateModal);
	}

	return (
		<div className='postDetailPageContentContainer'>
			<Button buttonMessage={'Go Back'} />
			<Button
				buttonMessage={'Update Post'}
				path={`action`}
				handleUpdateModal={handleUpdateModal}
			/>

			{updateModal && <textarea id='mytextarea'>Hello, World!</textarea>}

			{showPost()}

			<hr className='my-9' />

			{showComments()}
		</div>
	);
}

export default PostDetailPageContent;
