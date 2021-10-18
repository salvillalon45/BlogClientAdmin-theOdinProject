import React from 'react';
import Comments from './Comments';
import { formatDate } from '../../lib/utils';
import Errors from '../Reusable/Errors';
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

function BlogPageContent(props) {
	const { title, timestamp, content, author, _id: postid } = props.post;
	const { username } = author;
	const [comments, setCommments] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	// Client-side Runtime Data Fetching
	React.useEffect(async () => {
		try {
			const response = await fetch(
				`${process.env.GATSBY_BLOG_API}/posts/${postid}/comments`,
				{
					method: 'get',
					headers: {
						Authorization: localStorage.getItem('token'),
						'Content-Type': 'application/json'
					}
				}
			);

			const { status, statusText } = response;
			if (status === 401 && statusText === 'Unauthorized') {
				throw {
					errors: [
						'Create an account or log in to your current account to view comments and create comments!'
					]
				};
			}

			const commentsData = await response.json();
			const { comments } = commentsData;

			setCommments(comments);
			setIsLoaded(true);
		} catch (error) {
			setError(error.errors);
			setIsLoaded(true);
		}
	}, []);

	function showComments() {
		if (error) {
			return <Errors errors={error} />;
		} else if (!isLoaded) {
			return (
				<div className='text-center'>
					<p className='font-lato'>Loading comments...</p>
				</div>
			);
		} else if (comments && comments.length === 0) {
			return (
				<div className='text-center'>
					<p className='font-lato'>No comments for this post</p>
				</div>
			);
		}

		return <Comments comments={comments} />;
	}

	return (
		<div className='blogPageContentContainer'>
			<div className='blogContainer'>
				<div className='blogInfoContainer my-9'>
					<h3 className='font-lora font-semibold text-2xl	text-black truncate max-w-4/5 text-center mt-2 capitalize'>
						{title}
					</h3>
					<p className='font-lora font-bold text-center text-xl font-medium'>
						By {username}
					</p>
					<p className='font-lora text-center'>
						On {formatDate(new Date(timestamp))}
					</p>
				</div>

				<p className='m-auto w-35 whitespace-pre-line'>{content}</p>
			</div>

			<hr className='my-9' />

			{isLoaded && showComments()}
		</div>
	);
}

export default BlogPageContent;
