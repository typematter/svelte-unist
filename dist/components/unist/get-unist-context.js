import { getContext } from 'svelte';
import { UNIST_CONTEXT_SYMBOL } from './unist-context.symbol.js';
export const getUnistContext = () => getContext(UNIST_CONTEXT_SYMBOL) ?? {};
