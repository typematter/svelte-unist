<script lang="ts">
	import getUnistContext from '../contexts/get-unist-context.js';
	import { isLiteral, isParent } from '@accuser/unist-util-type-guards';
	import Node from './Node.svelte';

	let node: import('unist').Node = $props();

	const { components = {} } = getUnistContext();

	let Component = $derived(
		components[node.type as keyof typeof components] as import('svelte').Component<
			import('unist').Node
		>
	);
</script>

{#if Component}
	<Component {...node} />
{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}
