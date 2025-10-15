import { getContext, hasContext } from 'svelte';
import { CONTEXT_SYMBOL } from './context.symbol.js';
export const getUnistContext = () => {
    if (hasContext(CONTEXT_SYMBOL)) {
        return getContext(CONTEXT_SYMBOL);
    }
    throw new Error('getUnistContext() must be used within a <Unist> component');
};
