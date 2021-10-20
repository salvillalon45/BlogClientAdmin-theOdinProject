import * as React from 'react';
import { useLocation } from '@reach/router';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ActionPostPageContent from '../components/ActionPostPageContent';
import { getPostId } from '../lib/utils';

function ActionPostTemplate(props) {
	const id = 'actionPostContainer';
	const postid = getPostId(props);
	console.log({ postid });
	console.log(props);
	// const actionToTake = useLocation().search.split('?')[1];
	// console.log({ actionToTake });

	return (
		<Layout id={id}>
			<section>
				<p>HI</p>
				<Seo title={`Action Post`} />

				<ActionPostPageContent
					postid={postid}
					post={props.pageContext.postData}
					// actionToTake={actionToTake}
				/>
			</section>
		</Layout>
	);
}

export default ActionPostTemplate;
