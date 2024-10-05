import type { Node } from 'unist';
import type { Components } from './components.js';
export interface UnistContext {
    components: Components<Node>;
}
