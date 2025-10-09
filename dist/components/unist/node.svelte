<script lang="ts">
	import { isLiteral, isParent } from '@accuser/unist-util-type-guards';
	import { getUnistContext } from './get-unist-context.js';
	import Node from './node.svelte';

	let { node }: { node: import('unist').Node } = $props();

	const { components = {} } = getUnistContext();

	let Component = $derived(
		components[node.type as keyof typeof components] as import('svelte').Component<{
			node: import('unist').Node;
		}>
	);
</script>

{#if Component}
	<Component {node} />
{:else if isParent(node)}{#each node.children as child}<Node
			node={child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}
