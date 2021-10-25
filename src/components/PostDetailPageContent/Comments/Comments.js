import React from 'react';
import CommentItem from './CommentItem';

function Comments(props) {
	const { comments, postid } = props;

	const commentItems = comments.map((comment) => {
		const { timestamp, content, user_ref, _id: commentid } = comment;
		const { username } = user_ref;
		const commentData = { timestamp, username, content, commentid, postid };

		return (
			<>
				<hr />
				<CommentItem commentData={commentData} />
			</>
		);
	});

	return (
		<div className='commmentsContainer flex flex-col items-center'>
			<h1 className='font-lora font-bold text-2xl'>The Comments</h1>

			{commentItems}
		</div>
	);
}

export default Comments;
