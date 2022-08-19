// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [md.mdsvex(mdsvexConfig)],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		prerender: {
			default: true,
			entries: ['*']
		}
	}
};

export default config;
