import type { Components } from './components.js';
export interface UnistContext {
    ast: import('unist').Node;
    components?: Components;
}
