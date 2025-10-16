<script lang="ts">
	import { isLiteral, isParent } from '@accuser/unist-util-type-guards';
	import Node from './node.svelte';
	import { getUnistContext, type UnistContext } from './unist-context.js';

	let {
		context = getUnistContext(),
		node
	}: {
		context?: UnistContext;
		node: import('unist').Node;
	} = $props();

	let Component = $derived(
		context.components && node.type in context.components
			? (context.components[
					node.type as keyof typeof context.components
				] as import('svelte').Component<{ node: import('unist').Node }>)
			: undefined
	);
</script>

{#if Component}
	<svelte:boundary onerror={context.onerror}>
		<Component {node} />
		{#snippet failed(error)}
			{#if isParent(node)}{#each node.children as child (child)}<Node
						{context}
						node={child}
					/>{/each}{:else if isLiteral(node)}{node.value}{:else}{console.warn(
					`Unist.Node: error rendering ${node.type}: ${error instanceof Error ? error.message : String(error)}`
				)}{/if}
		{/snippet}
	</svelte:boundary>
{:else if isParent(node)}{#each node.children as child (child)}<Node
			{context}
			node={child}
		/>{/each}{:else if isLiteral(node)}{node.value}{:else}{console.warn(
		`Unist.Node: unknown node type: ${node.type}`
	)}{/if}
