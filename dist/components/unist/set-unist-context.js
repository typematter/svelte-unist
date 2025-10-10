import { setContext } from 'svelte';
import { CONTEXT_SYMBOL } from './context.symbol.js';
export const setUnistContext = (context) => setContext(CONTEXT_SYMBOL, context);
