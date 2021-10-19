import React from 'react';
import { formatDate } from '../../../lib/utils';

function PostDetail(props) {
	const { title, timestamp, content, author } = props.post;
	const { username } = author;

	return (
		<div className='postContainer'>
			<div className='postInfoContainer my-9'>
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

			<p className='font-lato m-auto w-35 whitespace-pre-line'>
				{content}
			</p>
		</div>
	);
}

export default PostDetail;
