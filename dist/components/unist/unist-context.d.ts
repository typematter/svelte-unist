import type { Components } from './components.js';
export interface UnistContext {
    ast: import('unist').Node;
    components?: Components;
    onerror?: (error: unknown, reset: () => void) => void;
}
export declare const getUnistContext: () => UnistContext, setUnistContext: (context: UnistContext) => UnistContext;
