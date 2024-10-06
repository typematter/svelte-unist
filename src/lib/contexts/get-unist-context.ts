import { UNIST_CONTEXT_TOKEN } from '$lib/tokens/unist-context-token.js';
import type { Context } from '$lib/types/unist.js';
import { getContext } from 'svelte';

export default (): Partial<Context> => getContext(UNIST_CONTEXT_TOKEN) ?? {};
