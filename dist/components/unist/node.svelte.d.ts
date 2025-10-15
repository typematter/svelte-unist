import Node from './node.svelte';
import { type UnistContext } from './unist-context.js';
type $$ComponentProps = {
    context?: UnistContext;
    node: import('unist').Node;
};
declare const Node: import("svelte").Component<$$ComponentProps, {}, "">;
type Node = ReturnType<typeof Node>;
export default Node;
