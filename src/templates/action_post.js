import * as React from 'react';
import { useLocation } from '@reach/router';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ActionPostPageContent from '../components/ActionPostPageContent';
import Errors from '../components/Reusable/Errors';
import { getPostId, checkActionPage } from '../lib/utils';

function ActionPostTemplate(props) {
	const id = 'actionPostContainer';
	const postid = getPostId(props);
	console.log({ postid });
	console.log(props);
	const actionToTake = checkActionPage(props);
	console.log({ actionToTake });

	// {
	// 	errors ? (
	// 		<div>
	// 			<Button path={'/'} buttonMessage={'Log In'} />
	// 			<Errors errors={errors} />
	// 		</div>
	// 	) : (
	// 		<main>{children}</main>
	// 	);
	// }

	return (
		<Layout id={id}>
			<section>
				<Seo title={`Action Post`} />

				<ActionPostPageContent
					postid={postid}
					post={props.pageContext.postData}
					actionToTake={actionToTake}
				/>
			</section>
		</Layout>
	);
}

export default ActionPostTemplate;
