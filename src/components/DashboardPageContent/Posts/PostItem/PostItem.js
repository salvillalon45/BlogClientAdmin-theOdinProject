import React from 'react';
import { Link } from 'gatsby';

function PostItem(props) {
	const { username, slug, title, timestamp } = props;

	return (
		<div className='blogItemContainer p-12 overflow-hidden rounded-lg shadow-2xl hover:opacity-75'>
			<Link to={`blog/${slug}`}>
				<h3 className='font-lora font-semibold text-2xl	text-black truncate max-w-4/5 text-center mt-2 capitalize'>
					{title}
				</h3>
				<p className='text-center text-xl mt-4'>{timestamp}</p>
				<p className='text-center text-xl font-medium'>By {username}</p>
				<button className='font-lora p-2 rounded-lg	text-white bg-linearBlue text-center mt-6 flex m-auto'>
					View the Post
				</button>
			</Link>
		</div>
	);
}

export default PostItem;
