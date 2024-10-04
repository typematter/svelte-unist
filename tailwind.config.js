import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['src/**/*.svelte'],
	theme: {
		extend: {
			typography() {
				return {
					DEFAULT: {
						css: {
							'code::before': {
								content: 'none'
							},
							'code::after': {
								content: 'none'
							}
						}
					}
				};
			}
		}
	},
	plugins: [forms(), typography()]
};
