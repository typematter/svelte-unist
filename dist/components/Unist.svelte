<script lang="ts">
	import setUnistContext from '../contexts/set-unist-context.js';
	import type { UnistProps } from '../types/unist-props.js';
	import Node from './Node.svelte';

	let { ast, ...context }: { ast: import('unist').Node } & UnistProps = $props();

	setUnistContext(context);
</script>

<Node {...ast} />
