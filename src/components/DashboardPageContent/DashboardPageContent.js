import React from 'react';
import Posts from './Posts';
import Errors from '../Reusable/Errors';
import { executeRESTMethod, checkUserLoggedIn } from '../../lib/utils';

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
		if (errors) {
			return <Errors errors={errors} />;
		} else if (!isLoaded) {
			return (
				<div className='text-center'>
					<p className='font-lato'>Loading Posts...</p>
				</div>
			);
		} else if (posts && posts.length === 0) {
			return (
				<div className='text-center'>
					<p className='font-lato'>No posts available</p>
				</div>
			);
		}

		return <Posts posts={posts} />;
	}

	return (
		<div className='dashboardPageContentContaienr'>
			{isLoaded && showPosts()}
		</div>
	);
}

export default DashboardPageContent;
