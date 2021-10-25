import React from 'react';
import Posts from './Posts';
import Button from '../Reusable/Button';
import {
	executeRESTMethod,
	showContent,
	checkForErrors
} from '../../lib/utils';

function DashboardPageContent(props) {
	const [posts, setPosts] = React.useState(null);
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	React.useEffect(async () => {
		const postsData = await executeRESTMethod('get', null, 'posts');

		checkForErrors(postsData, setErrors);

		setPosts(postsData.posts);
		setIsLoaded(true);
	}, []);

	function showPosts() {
		showContent(errors, isLoaded, 'Loading posts...', posts, 'Loading');

		return <Posts posts={posts} />;
	}

	return (
		<div className='dashboardPageContentContaienr'>
			<Button buttonMessage={'Create a New Post'} path={`action`} />

			{isLoaded && showPosts()}
		</div>
	);
}

export default DashboardPageContent;
