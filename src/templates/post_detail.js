import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PostDetailPageContent from '../components/PostDetailPageContent';
import { getPostById } from '../lib/utils';

function PostDetailTemplate(props) {
	const id = 'blogPageContainer';

	const { posts } = props.data.blogs;
	const { pathname } = props.location;
	const postid = pathname.split('/')[2];
	const post = getPostById(posts, postid);

	// TODO Add a use effect to retrieve post by detail. We can use the post detail end point we created

	return (
		<Layout id={id}>
			<section>
				<Seo title={`Blog: ${post.title}`} />

				<PostDetailPageContent post={post} />
			</section>
		</Layout>
	);
}

// export const query = graphql`
// 	query {
// 		blogs {
// 			posts {
// 				title
// 				content
// 				_id
// 				timestamp
// 				author {
// 					username
// 				}
// 			}
// 		}
// 	}
// `;

export default PostDetailTemplate;
