import React from 'react';
import PostItem from './PostItem';
// import { graphql, useStaticQuery } from 'gatsby';
import { formatDate } from '../../../lib/utils';

function Posts({ posts }) {
	const postItems = posts.map((post) => {
		const { title, content, timestamp, _id } = post;
		const { username } = post.author;

		return (
			<PostItem
				slug={_id}
				title={title}
				timestamp={formatDate(new Date(timestamp))}
				username={username}
				postid={_id}
				content={content}
			/>
		);
	});

	return (
		<div className='postsContainer'>
			<div className='px-10 py-12'>
				<div className='postItemWrapperContainer grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 mt-8'>
					{postItems}
				</div>
			</div>
		</div>
	);
}

export default Posts;
