module.exports = {
	siteMetadata: {
		title: 'Sal Blog',
		titleTemplate: '%s · Sal Blog',
		description: 'A blog made by Salvador Villalon',
		url: 'https://www.doe.com', // No trailing slash allowed!
		image: '/images/sal.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@salvillalon45'
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
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
