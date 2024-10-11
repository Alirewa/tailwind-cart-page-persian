/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['iranyekan'],
			},
		},
		container: {
			padding: '1rem',
			center: true,
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
