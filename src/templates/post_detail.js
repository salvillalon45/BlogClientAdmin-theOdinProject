import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PostDetailPageContent from '../components/PostDetailPageContent';
import AuthCheck from '../components/Reusable/AuthCheck';
import { getPostId, checkUserLoggedIn } from '../lib/utils';

function PostDetailTemplate(props) {
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const id = 'postDetailContainer';

	const postid = getPostId(props);
	const userCheck = checkUserLoggedIn();

	if (!userCheck && !isLoaded) {
		setErrors(['You need to log in to proceed!']);
		setIsLoaded(true);
	}

	return (
		<Layout id={id}>
			<section>
				<Seo title={`Post`} />

				{errors ? (
					<AuthCheck errors={errors} />
				) : (
					<PostDetailPageContent postid={postid} />
				)}
			</section>
		</Layout>
	);
}

export default PostDetailTemplate;
