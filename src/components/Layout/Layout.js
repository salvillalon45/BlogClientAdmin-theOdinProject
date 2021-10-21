import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/global.css';
import Button from '../../components/Reusable/Button';
import Errors from '../../components/Reusable/Errors';
import { checkUserLoggedIn } from '../../lib/utils';

function Layout({ children }) {
	console.log('Going through layout');

	return (
		<>
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
}

export default Layout;
