import merge from '../../utils/merge.js';
import { setContext } from 'svelte';
import { getUnistContext } from './get-unist-context.js';
import { UNIST_CONTEXT_SYMBOL } from './unist-context.symbol.js';
export const setUnistContext = (context) => setContext(UNIST_CONTEXT_SYMBOL, merge(context, getUnistContext()));
