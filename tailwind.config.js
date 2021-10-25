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
			linearRed:
				'linear-gradient(90deg, rgba(198,1,31,1) 0%, rgba(244,0,9,1) 34%, rgba(198,1,31,1) 100%)',
			linearBlue:
				'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(53,48,68,1) 35%, rgba(55,63,65,1) 100%)',
			linearGreen:
				'linear-gradient(90deg, rgba(23,177,105,1) 0%, rgba(100,177,30,1) 34%, rgba(23,177,105,1) 100%)'
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
