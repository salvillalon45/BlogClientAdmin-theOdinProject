import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PostDetailPageContent from '../components/PostDetailPageContent';
import { getPostId } from '../lib/utils';

function PostDetailTemplate(props) {
	const id = 'postDetailContainer';
	const postid = getPostId(props);

	return (
		<Layout id={id}>
			<section>
				<Seo title={`Post`} />

				<PostDetailPageContent postid={postid} />
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
