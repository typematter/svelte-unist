<script lang="ts">
	import Node from './node.svelte';
	import { setUnistContext } from './set-unist-context.js';
	import type { UnistContext } from './unist-context.js';

	let { ast, ...context }: { ast: import('unist').Node } & UnistContext = $props();

	setUnistContext(context);
</script>

<Node node={ast} />
