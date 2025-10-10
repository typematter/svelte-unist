import type { ComponentMap } from './component-map.js';

export type Components<T extends import('unist').Node = ComponentMap[keyof ComponentMap]> = {
	[K in T['type']]?: import('svelte').Component<{ node: Extract<T, { type: K }> }>;
};
