import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ActionPostPageContent from '../components/ActionPostPageContent';
import AuthCheck from '../components/Reusable/AuthCheck';
import {
	getPostId,
	checkActionPage,
	checkUserLoggedIn,
	capitalize
} from '../lib/utils';

function ActionPostTemplate(props) {
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const id = 'actionPostContainer';

	const postid = getPostId(props);
	const actionToTake = checkActionPage(props);
	const userCheck = checkUserLoggedIn();

	if (!userCheck && !isLoaded) {
		setErrors(['You need to log in to proceed!']);
		setIsLoaded(true);
	}

	return (
		<Layout id={id}>
			<section>
				<Seo title={`${capitalize(actionToTake)} Post`} />

				{errors ? (
					<AuthCheck errors={errors} />
				) : (
					<ActionPostPageContent
						postid={postid}
						post={props.pageContext.postData}
						actionToTake={actionToTake}
					/>
				)}
			</section>
		</Layout>
	);
}

export default ActionPostTemplate;
