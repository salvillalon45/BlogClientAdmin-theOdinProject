import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import DashboardPageContent from '../components/DashboardPageContent';
import Errors from '../components/Reusable/Errors';
import { usePageUserLoggedInCheck, checkUserLoggedIn } from '../lib/utils';

function DashboardPage() {
	const [errors, setErrors] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const id = 'dashboardPageContainer';

	console.group('Going through dashboard');
	const result = usePageUserLoggedInCheck();
	// React.useEffect(() => {
	// 	const userCheck = checkUserLoggedIn();

	// 	if (!userCheck) {
	// 		console.log('HTere are errors');
	// 		setErrors(['You need to log in to proceed!']);
	// 	}
	// }, []);

	if (result && !isLoaded) {
		console.log('Result has value');
		console.log({ result });
		console.log('What are errors');
		console.log(errors);
		setErrors(result);
		setIsLoaded(!isLoaded);
		// return;
	}

	console.groupEnd();
	return (
		<Layout id={id}>
			<section>
				<Seo title='Dashboard' />

				{errors ? <Errors errors={errors} /> : <DashboardPageContent />}
			</section>
		</Layout>
	);
}

export default DashboardPage;
