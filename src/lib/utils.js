import React from 'react';
import jwt_decode from 'jwt-decode';
import Errors from '../Reusable/Errors';

function showContent(errors, isLoaded, dataToShow) {
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
}

async function executeRESTMethod(method, bodyData, path) {
	const response = await fetch(`${process.env.GATSBY_BLOG_API}/${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: bodyData ? JSON.stringify(bodyData) : null
	});

	const jsonData = await response.json();

	return jsonData;
}

function checkUserLoggedIn() {
	try {
		const token = localStorage.getItem('token') ?? '';
		const user = localStorage.getItem('user') ?? '';
		const decoded = jwt_decode(token);

		if (user === '') {
			return false;
		}

		if (token && decoded) {
			const expiry = decoded.exp;
			const now = new Date();

			if (now.getTime() > expiry * 1000) {
				// console.log('Token expired.');
				return false;
			} else {
				// console.log('Valid token');
				return true;
			}
		}

		return true;
	} catch (error) {
		return false;
	}
}

function getPostById(posts, postid) {
	return posts.find((post) => post._id === postid);
}

function getPostId() {
	return window.location.pathname.split('/')[2];
}

function checkAuthPage(authFlag) {
	if (authFlag === undefined || authFlag === null || authFlag.length === 0) {
		return true;
	}

	return !['sign-up', 'log-in'].includes(authFlag);
}

function formatDate(timestamp) {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const messageDate = timestamp.toLocaleDateString([], options);
	return messageDate;
}

export {
	checkUserLoggedIn,
	getPostById,
	formatDate,
	getPostId,
	checkAuthPage,
	executeRESTMethod
};
