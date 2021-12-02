import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import s from '@sveltejs/adapter-static'
// import adapterNetlify from "@sveltejs/adapter-netlify";
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        // adapter: adapterNetlify(),
        adapter: s({
            pages: 'build',
            assets: 'build',
            fallback: null
        })
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
