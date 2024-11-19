import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import VitePluginStaticCopy from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [sveltekit()]
});