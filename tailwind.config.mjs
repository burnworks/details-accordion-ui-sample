/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'body': ['"Noto Sans JP Variable"', 'sans-serif'],
				'code': ['"Source Code Pro Variable"', 'monospace'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
