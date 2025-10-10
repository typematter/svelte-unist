import { setContext } from 'svelte';
import { CONTEXT_SYMBOL } from './context.symbol.js';
import type { UnistContext } from './unist-context.js';

export const setUnistContext = (context: UnistContext) => setContext(CONTEXT_SYMBOL, context);
