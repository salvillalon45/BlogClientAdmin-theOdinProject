import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import DashboardPageContent from '../components/DashboardPageContent';
import AuthCheck from '../components/Reusable/AuthCheck';
import { checkUserLoggedIn } from '../lib/utils';

function DashboardPage() {
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const id = 'dashboardPageContainer';

	const userCheck = checkUserLoggedIn();

	if (!userCheck && !isLoaded) {
		setErrors(['You need to log in to proceed!']);
		setIsLoaded(true);
	}

	return (
		<Layout id={id}>
			<section>
				<Seo title='Dashboard' />

				{errors ? (
					<AuthCheck errors={errors} />
				) : (
					<DashboardPageContent />
				)}
			</section>
		</Layout>
	);
}

export default DashboardPage;
