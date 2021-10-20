import React from 'react';
import jwt_decode from 'jwt-decode';
import Errors from '../components/Reusable/Errors';
import IsLoaded from '../components/Reusable/IsLoaded';
import NoContentAvailable from '../components/Reusable/NoContentAvailable';

function showContent(errors, isLoaded, message, dataToShow) {
	console.group('Inside showContent');
	if (errors) {
		console.log('Going to show errors');
		return <Errors errors={errors} />;
	} else if (!isLoaded) {
		console.log('Going to show is loaded');
		return <IsLoaded message={message} />;
	} else if (dataToShow && dataToShow.length === 0) {
		console.log('GOing to show no content avialab');
		return <NoContentAvailable message={message} />;
	} else {
		return null;
	}
	console.groupEnd();
}

async function executeRESTMethod(
	method,
	bodyData,
	path,
	authorization,
	errorMessage
) {
	const response = await fetch(`${process.env.GATSBY_BLOG_API}/${path}`, {
		method,
		headers: {
			Authorization: authorization,
			'Content-Type': 'application/json'
		},
		body: bodyData ? JSON.stringify(bodyData) : null
	});

	const { status, statusText } = response;
	if (status === 401 && statusText === 'Unauthorized') {
		throw {
			errors: [errorMessage]
		};
	}

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

function getPostId(props) {
	return props?.pageContext?.slug ?? '';
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
	executeRESTMethod,
	showContent
};
