<script lang="ts" module>
	export interface ComponentMap {}

	export type Components<T extends import('unist').Node = ComponentMap[keyof ComponentMap]> = {
		[K in T['type']]?: import('svelte').Component<{ node: Extract<T, { type: K }> }>;
	};

	export interface UnistContext {
		components: Components;
	}
</script>

<script lang="ts">
	import Node from './node.svelte';
	import { setUnistContext } from './set-unist-context.js';

	let { ast, ...context }: { ast: import('unist').Node; components?: Partial<Components> } =
		$props();

	setUnistContext(context);
</script>

<Node node={ast} />
