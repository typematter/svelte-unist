import defaultComponents from '$lib/defaults/default-components.js';
import { UNIST_CONTEXT_TOKEN } from '$lib/tokens/unist-context-token.js';
import type { UnistContext } from '$lib/types/unist-context.js';
import { setContext } from 'svelte';
import getUnistContext from './get-unist-context.js';

export default ({ components, ...rest }: Partial<UnistContext>): UnistContext => {
	const context = getUnistContext();

	return setContext(UNIST_CONTEXT_TOKEN, {
		...context,
		...rest,
		components: {
			...defaultComponents,
			...context.components,
			...components
		}
	});
};
