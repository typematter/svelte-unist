import type { PageServerLoad } from './$types.js';

import { u } from 'unist-builder';

export const load = (async () => {
	const ast = u('root', [u('text', 'Hello, World!')]);

	return { ast };
}) satisfies PageServerLoad;
