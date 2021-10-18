import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import IndexPageContent from '../components/IndexPageContent';

function IndexPage() {
	const id = 'indexPageContainer';

	return (
		<Layout id={id}>
			<section>
				<Seo title='Home' />

				<IndexPageContent />
			</section>
		</Layout>
	);
}

export default IndexPage;
