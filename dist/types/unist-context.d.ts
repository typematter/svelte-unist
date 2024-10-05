import type { Components } from './components.js';
import type { UnistProps } from './unist-props.js';
export interface UnistContext extends UnistProps {
    components: Components;
}
