import defaultComponents from '../defaults/default-components.js';
import { UNIST_CONTEXT_TOKEN } from '../tokens/unist-context-token.js';
import { setContext } from 'svelte';
import getUnistContext from './get-unist-context.js';
export default ({ components, ...rest }) => {
    const context = getUnistContext();
    return setContext(UNIST_CONTEXT_TOKEN, {
        ...context,
        ...rest,
        components: {
            ...defaultComponents,
            ...context.components,
            ...components
        }
    });
};
