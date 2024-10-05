import { UNIST_CONTEXT_TOKEN } from '../tokens/unist-context-token.js';
import { setContext } from 'svelte';
export default (context) => setContext(UNIST_CONTEXT_TOKEN, context);
