import React from 'react';
import { formatDate } from '../../../../lib/utils';

function CommentItem(props) {
	const { content, timestamp, username } = props.commentData;

	return (
		<div className='commentItemContainer p-12 overflow-hidden rounded-lg shadow-xl my-9 w-35'>
			<p className='font-lato whitespace-pre-line text-xl'>{content}</p>

			<hr className='my-9' />

			<p className='font-lato text-md font-medium'>By {username}</p>
			<p className='font-lato text-md'>
				{formatDate(new Date(timestamp))}
			</p>
		</div>
	);
}

export default CommentItem;
