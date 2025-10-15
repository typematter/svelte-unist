<script lang="ts">
	import Node from './node.svelte';
	import { setUnistContext } from './set-unist-context.js';
	import type { UnistContext } from './unist-context.js';

	let context: UnistContext = $props();

	setUnistContext(context);
</script>

<Node {context} node={context.ast} />
