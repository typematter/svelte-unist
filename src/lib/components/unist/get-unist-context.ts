import { getContext } from 'svelte';
import { CONTEXT_SYMBOL } from './context.symbol.js';
import type { UnistContext } from './unist-context.js';

export const getUnistContext = () => getContext<UnistContext>(CONTEXT_SYMBOL) || {} as UnistContext;
