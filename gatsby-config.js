require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'Sal Blog',
		titleTemplate: '%s · Sal Blog',
		description: 'Admin view of the sal blog made by Salvador Villalon',
		url: 'https://blog-sal-admin.netlify.app/', // No trailing slash allowed!
		image: '/images/sal.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@salvillalon45'
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.ico'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		}
	]
};
