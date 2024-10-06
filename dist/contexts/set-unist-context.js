import { UNIST_CONTEXT_TOKEN } from '../tokens/unist-context-token.js';
import { setContext } from 'svelte';
import getUnistContext from './get-unist-context.js';
import merge from './merge.js';
export default (context) => setContext(UNIST_CONTEXT_TOKEN, merge(context, getUnistContext()));
