import { UNIST_CONTEXT_TOKEN } from '../tokens/unist-context-token.js';
import { getContext } from 'svelte';
export default () => getContext(UNIST_CONTEXT_TOKEN) ?? {};
