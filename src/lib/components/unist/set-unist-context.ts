import merge from '$lib/utils/merge.js';
import { setContext } from 'svelte';
import { getUnistContext } from './get-unist-context.js';
import { UNIST_CONTEXT_SYMBOL } from './unist-context.symbol.js';
import type { UnistContext } from './unist.svelte';

export const setUnistContext = (context: Partial<UnistContext>) =>
	setContext(UNIST_CONTEXT_SYMBOL, merge(context, getUnistContext()));
