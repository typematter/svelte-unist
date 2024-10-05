import { UNIST_CONTEXT_TOKEN } from '$lib/tokens/unist-context-token.js';
import type { UnistContext } from '$lib/types/unist-context.js';
import { getContext } from 'svelte';

export default (): Partial<UnistContext> => getContext(UNIST_CONTEXT_TOKEN) ?? {};
