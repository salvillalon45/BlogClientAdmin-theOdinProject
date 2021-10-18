module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: {
			blue: '#020024',
			white: '#fffefd',
			black: '#111113',
			grey: '#eae9ee'
		},
		textColor: {
			blue: '#020024',
			white: '#fffefd',
			black: '#111113',
			grey: '#eae9ee'
		},
		fontFamily: {
			lato: ['Lato, sans-serif'],
			lora: ['Lora, serif']
		},
		backgroundImage: {
			linearBlue:
				'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(53,48,68,1) 35%, rgba(55,63,65,1) 100%)'
		},
		extend: {
			spacing: {
				35: '35rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
