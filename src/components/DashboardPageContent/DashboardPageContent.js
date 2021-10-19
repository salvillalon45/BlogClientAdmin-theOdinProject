import React from 'react';
import Posts from './Posts';
import Errors from '../Reusable/Errors';
import { executeRESTMethod, showContent } from '../../lib/utils';

function DashboardPageContent() {
	const [posts, setPosts] = React.useState(null);
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	// Client-side Runtime Data Fetching
	React.useEffect(async () => {
		const postsData = await executeRESTMethod('get', null, 'posts');
		const errors = postsData.errors ?? '';

		if (errors) {
			setErrors(errors);
			return;
		}

		setPosts(postsData.posts);
		setIsLoaded(true);
	}, []);

	function showPosts() {
		showContent(errors, isLoaded, 'posts', posts);

		return <Posts posts={posts} />;
	}

	return (
		<div className='dashboardPageContentContaienr'>
			{isLoaded && showPosts()}
		</div>
	);
}

export default DashboardPageContent;
