import { getContext } from 'svelte';
import { UNIST_CONTEXT_SYMBOL } from './unist-context.symbol.js';
import type { UnistContext } from './unist.svelte';

export const getUnistContext = () => getContext<Partial<UnistContext>>(UNIST_CONTEXT_SYMBOL) ?? {};
