import { getContext } from 'svelte';
import { CONTEXT_SYMBOL } from './context.symbol.js';
export const getUnistContext = () => getContext(CONTEXT_SYMBOL);
