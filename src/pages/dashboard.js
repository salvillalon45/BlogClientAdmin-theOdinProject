import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import DashboardPageContent from '../components/DashboardPageContent';

function DashboardPage() {
	const id = 'dashboardPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Dashboard' />

				<DashboardPageContent />
			</section>
		</Layout>
	);
}

export default DashboardPage;
