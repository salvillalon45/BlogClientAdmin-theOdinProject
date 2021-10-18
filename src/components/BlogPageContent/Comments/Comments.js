import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

function Comments(props) {
	const { comments } = props;
	const [currentComments, setCurrentComments] = React.useState(comments);

	function handleCommmentsChange(formInput) {
		setCurrentComments([...currentComments, formInput]);
	}

	const commentItems = currentComments.map((comment) => {
		const { timestamp, content, user_ref } = comment;
		const { username } = user_ref;
		const commentData = { timestamp, username, content };
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

			<CommentForm handleCommmentsChange={handleCommmentsChange} />
		</div>
	);
}

export default Comments;
