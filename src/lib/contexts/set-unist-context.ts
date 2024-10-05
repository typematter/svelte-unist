import { UNIST_CONTEXT_TOKEN } from '$lib/tokens/unist-context-token.js';
import type { UnistContext } from '$lib/types/unist-context.js';
import { setContext } from 'svelte';

export default (context: Partial<UnistContext>) => setContext(UNIST_CONTEXT_TOKEN, context);
