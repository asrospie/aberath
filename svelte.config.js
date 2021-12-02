import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
// import s from '@sveltejs/adapter-static'
import s from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: s(),
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
