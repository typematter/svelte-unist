import { UNIST_CONTEXT_TOKEN } from '$lib/tokens/unist-context-token.js';
import type { Context } from '$lib/types/unist.js';
import { setContext } from 'svelte';
import getUnistContext from './get-unist-context.js';
import merge from './merge.js';

export default (context: Partial<Context>) =>
	setContext(UNIST_CONTEXT_TOKEN, merge(context, getUnistContext()));
