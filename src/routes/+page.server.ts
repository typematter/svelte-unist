import type { Node } from 'unist';
import { u } from 'unist-builder';
import type { PageServerLoad } from './$types.js';

export const load = (async () => {
	const ast: Node = u('root', [u('text', 'Hello, World!')]);

	return { ast };
}) satisfies PageServerLoad;
